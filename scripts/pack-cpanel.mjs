/**
 * Creates out-cpanel.zip for cPanel File Manager (PKZIP standard).
 * Windows: .NET ZipFile (نه Compress-Archive و نه tar با پیشوند ./)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const zipPath = path.join(root, "out-cpanel.zip");

if (!fs.existsSync(path.join(outDir, "index.html"))) {
  console.error("پوشه out یافت نشد. ابتدا اجرا کنید: npm run build:cpanel");
  process.exit(1);
}

const chunksDir = path.join(outDir, "_next", "static", "chunks");
const chunkCss = fs.existsSync(chunksDir)
  ? fs.readdirSync(chunksDir).filter((f) => f.endsWith(".css"))
  : [];

if (chunkCss.length === 0) {
  console.warn("هشدار: فایل CSS در _next/static/chunks یافت نشد. build با --turbopack را بررسی کنید.");
} else {
  console.log(`CSS در chunks: ${chunkCss.length} فایل`);
}

if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

const outAbs = path.resolve(outDir).replace(/\\/g, "/");
const zipAbs = path.resolve(zipPath).replace(/\\/g, "/");
const isWin = process.platform === "win32";

try {
  if (isWin) {
    const ps = [
      "Add-Type -AssemblyName System.IO.Compression.FileSystem",
      `[IO.Compression.ZipFile]::CreateFromDirectory('${outAbs.replace(/'/g, "''")}', '${zipAbs.replace(/'/g, "''")}', 'Optimal', $false)`,
    ].join("; ");
    execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: "inherit" });
  } else {
    execSync(`cd "${outAbs}" && zip -r -q "${zipAbs}" .`, { stdio: "inherit" });
  }
} catch (err) {
  console.error("\nساخت zip ناموفق بود.");
  throw err;
}

// تأیید: index.html در ریشه zip، بدون پیشوند out/
const listing = isWin
  ? execSync(
      `powershell -NoProfile -Command "(Add-Type -AssemblyName System.IO.Compression.FileSystem); [IO.Compression.ZipFile]::OpenRead('${zipAbs.replace(/'/g, "''")}').Entries | ForEach-Object { $_.FullName }"`,
      { encoding: "utf8" }
    )
  : execSync(`unzip -l "${zipAbs}"`, { encoding: "utf8" });

const entries = listing
  .split(/\r?\n/)
  .map((l) => l.trim().replace(/\\/g, "/"))
  .filter((l) => l && !l.startsWith("Archive") && !l.includes("----") && !l.startsWith("Length"));

const hasRootIndex = entries.some(
  (e) => e === "index.html" || e.endsWith("/index.html") && e.split("/").length <= 2
);
const hasOutPrefix = entries.some((e) => e.startsWith("out/"));

if (hasOutPrefix) {
  console.error("خطا: zip دارای پیشوند out/ است.");
  process.exit(1);
}
if (!entries.includes("index.html")) {
  console.error("خطا: index.html در ریشه zip نیست.");
  process.exit(1);
}

const sizeMb = (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2);
console.log(`\nآماده آپلود cPanel: ${zipPath} (${sizeMb} MB)`);
console.log("Extract در public_html — index.html و _next و images در ریشه.");
console.log("از zip کردن دستی پوشه out در Explorer خودداری کنید.");
