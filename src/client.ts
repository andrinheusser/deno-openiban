export default async function (url: string) {
  const response = await fetch(`https://openiban.com/${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}
