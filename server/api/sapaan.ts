export default defineEventHandler((event) => {
  const metodeMasuk = event.method;
  const alamatMasuk = event.path;

  return {
    status: "Berhasil terhubung ke Backend",
    metode: metodeMasuk,
    alamat: alamatMasuk,
  };
});
