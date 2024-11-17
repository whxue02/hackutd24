async function main() {
	try {
		// Construct a file according to the Web API
		const file = new File(["Hello World!"], "hello.txt");

		// Create form data and attach the file
		const data = new FormData();
		data.append("file", file);

		// Optional: Attach other info about the file

		// Custom name
		//data.append("name", "my cool file")

		// Upload to a group
		//data.append("group_id", "my-group-id")

		// keyvalue metadata
		// const kv = JSON.stringify({
		//   env: "prod",
		//   user: "sudo"
		// })
		// data.append("keyvalues", kv)

		// Upload the file
		const uploadRequest = await fetch("https://uploads.pinata.cloud/v3/files", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.PINATA_JWT}`,
			},
			body: data,
		});
		// Parse the response and log it out
		const upload = await uploadRequest.json();
		console.log(upload);
	} catch (error) {
		console.log(error);
	}
}

main();