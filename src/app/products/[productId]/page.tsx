export default function ProductsDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>ProductsDetails {params.productId}</div>;
}
