async function main() {
	try {
		// Build optional queries
		const queryParams = new URLSearchParams();

		// Filter by name
		//queryParams.append("name", "hello.txt");

		// Filter by group ID
		// queryParams.append("group", "18893556-de8e-4229-8a9a-27b95468dd3e");

		// Filter by mime type
		// queryParams.append("mimeType", "text/plain");

		// Filter by CID
		// queryParams.append(
		// 	"cid",
		// 	"bafkreicnu2aqjkoglrlrd65giwo4l64pdajxffk6jtq2vb7yaiopc3yu7m",
		// );

		// Set result limit
		// queryParams.append("limit", "100");

		// Add pagination token
		// queryParams.append(
		// 	"pageToken",
		// 	"MDE5MTk0NTctYzJjNi03NzBlLTkzOTEtOGM3MmM0ZjQxZjY0",
		// );

		const queryString = queryParams.toString();

		// Construct the URL
		const url = `https://api.pinata.cloud/v3/files${queryString ? `?${queryString}` : ""}`;

		// Fetch list of files
		const filesRequest = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.PINATA_JWT}`,
			},
		});

		// Parse the response and log it out
		const files = await filesRequest.json();
		console.log(files.data);
	} catch (error) {
		console.log(error);
	}
}

main();