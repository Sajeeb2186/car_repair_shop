export const getServices = async () => {
  const resp = await fetch("http://localhost:3000/services/api/get-all");
  const services = resp.json();
  return services;
};
export const getServiceDetails = async (id) => {
  const resp = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = resp.json();
  return service;
};
