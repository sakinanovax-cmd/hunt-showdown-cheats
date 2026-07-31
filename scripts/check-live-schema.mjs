const res = await fetch("https://huntcheats.com/");
const html = await res.text();
const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
console.log("status", res.status, "jsonld blocks", matches.length);

for (const match of matches) {
  const json = JSON.parse(match[1]);
  const items = json["@graph"] || [json];
  for (const item of items) {
    console.log("\nTYPE:", item["@type"], item["@id"] || item.name || "");
    if (item["@type"] === "WebPage") {
      console.log("about:", JSON.stringify(item.about));
    }
    if (item["@type"] === "Product") {
      console.log(
        JSON.stringify(
          {
            sku: item.sku,
            image: item.image,
            offers: item.offers,
          },
          null,
          2,
        ),
      );
    }
    if (item["@type"] === "VideoObject") {
      console.log("VIDEO ON HOMEPAGE");
      console.log(JSON.stringify(item, null, 2).slice(0, 600));
    }
  }
}

if (html.includes("VideoObject")) console.log("\nraw includes VideoObject: yes");
else console.log("\nraw includes VideoObject: no");
