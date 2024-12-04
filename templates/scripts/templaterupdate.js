async function updateModificationDate(tp) {
    const modificationDate = tp.file.last_modified_date("MMMM DD YYYY");
    return `modification: ${modificationDate}`;
}

module.exports = updateModificationDate;
