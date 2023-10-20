type Props = {}

const boxStyle = {
    height: "500px",
    width: "500px",
}

export default function RightTopBox({}: Props) {
  return (
    <div style={boxStyle} className="absolute top-0 right-0 bg-primary bg-opacity-10 z-[-1]"></div>
  )
}