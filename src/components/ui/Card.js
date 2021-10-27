function Card(props) {
  return (
    <div class="rounded-lg border-2 bg-white w-5/6 mx-auto text-center space-y-4 py-6">
      {props.children}
    </div>
  );
}

export default Card;
