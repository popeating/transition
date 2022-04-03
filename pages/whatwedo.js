export default function Whatwedo() {
  return (
    <>
      <div className="w-100 h-screen flex justify-center items-center">
        What we do
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { dummy: 'dummy' }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
