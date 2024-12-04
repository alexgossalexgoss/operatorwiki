async function applyFooter(tp) {
    const footer = `
created: <% tp.file.creation_date("MMMM DD YYYY") %>  
last modified: <% tp.file.last_modified_date("MMMM DD YYYY") %>  
[[index|Back to Main]]
`;

    const files = app.vault.getMarkdownFiles(); // Get all Markdown files in the vault
    for (const file of files) {
        const content = await app.vault.read(file); // Read file content
        if (!content.includes("created:")) {
            // Append footer only if it doesn't already exist
            await app.vault.modify(file, content + "\n\n" + footer);
        }
    }
    return "Footer applied to all notes.";
}

module.exports = applyFooter;
