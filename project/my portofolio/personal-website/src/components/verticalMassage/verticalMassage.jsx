import "./verticalMassage.css";

const VerticalMassage = () => {
  return (
    <div className="ml-16 grow h-screen ">
      <div className="massage flex flex-col h-screen justify-self-start ">
        <div className="lineTop grow w-1 bg-secondary ml-2.5 "></div>
        <div className="text-accent bg-primary   ">
          <p className="py-10">Wellcome to my perosnal </p>
        </div>
        <div className="lineBottom grow w-1 bg-secondary ml-2.5"></div>
      </div>
    </div>
  );
};

export default VerticalMassage;
