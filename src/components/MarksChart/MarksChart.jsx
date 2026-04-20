import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
      biology: studentData.marks.biology,
    };
    const avg =
      (student.physics + student.chemistry + student.math + student.biology) /
      4;
    student.avg = avg;
    return student;
  });
  return (
    <>
      <BarChart width={600} height={300} data={marksChartData}>
        <XAxis
          dataKey="name"
          label={{
            position: "insideBottomRight",
            value: "XAxis title",
            offset: -10,
          }}
        />
        <YAxis
          label={{
            position: "insideTopLeft",
            value: "YAxis title",
            angle: -90,
            dy: 60,
          }}
        />
        <Bar dataKey="physics" fill="yellow" />
        <Bar dataKey="chemistry" fill="red" />
        <Bar dataKey="math" fill="green" />
        <Bar dataKey="biology" fill="blue" />
      </BarChart>
    </>
  );
};

export default MarksChart;
