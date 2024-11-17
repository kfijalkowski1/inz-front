import {Button} from "flowbite-react";

function MyCallButton(props: { onClick: () => void, text: string }) {
  return (
      <Button size="lg" outline gradientDuoTone="greenToBlue" onClick={props.onClick}>
        {props.text}
      </Button>);
}

export default MyCallButton;