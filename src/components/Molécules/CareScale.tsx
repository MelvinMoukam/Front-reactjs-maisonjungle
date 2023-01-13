import sun from "../../assets/sun.png";
import water from "../../assets/water.png";

const quantityLabel: { [key: string | number]: string } = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({
  scaleValue,
  careType,
}: {
  scaleValue: number;
  careType: string;
}) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
