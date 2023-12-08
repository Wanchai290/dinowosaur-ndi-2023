
interface Props {
  dialog: string,
  teller: string
}

export default function DialogBox({dialog, teller}: Props): JSX.Element {


  return (<div className="w-full bg-gray-300 absolute flex flex-col" style={{top: "65%", height:"500px" }}>
    <h1>{teller}</h1>
    <p>{dialog}</p>

  </div>);

}