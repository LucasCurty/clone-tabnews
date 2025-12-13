export default function teste(request, response) {
  response.status(200).json({
    chave: "Hello world!!",
  });
}
