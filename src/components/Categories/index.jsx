import TriangleShape from "../comp/TriangleShape";
import Card from "./Card";


const Categories = () => {
  return (
    <div className="lg:mx-20 mx-4 -mt-[55px] gap-5 flex flex-wrap justify-around ">
      <TriangleShape />
      <Card
        title={"المكيفات المركزية"}
        disc={
          "وحدات مركزية بقدرات تبريد عالية للمصانع و المنشآت و المجمعات السكنية"
        }
      />
      <Card
        title={"المكيفات المركزية"}
        disc={
          "وحدات مركزية بقدرات تبريد عالية للمصانع و المنشآت و المجمعات السكنية"
        }
      />
      <Card
        title={"المكيفات المركزية"}
        disc={
          "وحدات مركزية بقدرات تبريد عالية للمصانع و المنشآت و المجمعات السكنية"
        }
      />
      <Card
        title={"المكيفات المركزية"}
        disc={
          "وحدات مركزية بقدرات تبريد عالية للمصانع و المنشآت و المجمعات السكنية"
        }
      />
    </div>
  );
};

export default Categories;
