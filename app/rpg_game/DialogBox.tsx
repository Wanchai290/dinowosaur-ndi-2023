
interface Props {
  dialog: string,
  teller: string
}

export default function DialogBox({dialog, teller}: Props): JSX.Element {


  return (
  <div className="rounded-t-sm p-16 w-full bg-gray-300 absolute flex flex-col" style={{top: "65%", height:"500px" }}>
    <h1 className=" p-4 text-xl font-bold">{teller}</h1>
    <p className="rounded-xl p-8 bg-[#f5e6d0]">{dialog}</p>
  </div>
  );

}