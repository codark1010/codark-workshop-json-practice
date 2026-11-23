return $input.all().map((item, index) => {
  const record = item.json;
  const cleanLabel = record.customerLabel.trim().toLowerCase();
  return {
    json: {
      ticketCode: record.ticketCode,
      partCount: record.parts.length,
      firstPart: record.parts[0],
      assetCode: record.asset.code,
      cleanLabel,
      labelTag: cleanLabel.replace(" ", "-"),
      noteSections: record.notes.split("|").map(text => text.trim()),
      hasCableNote: record.notes.includes("cable"),
      validAssetCode: /^[A-Z]{2}-\d{3}$/.test(record.asset.code),
      technicianMissing: record.technician === null,
      stockIsNumber: typeof record.stockCount === "number"
    },
    pairedItem: { item: index }
  };
});
