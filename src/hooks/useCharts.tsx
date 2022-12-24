import React from "react";
import { Chart, User } from "../components/types";

export interface IChartsService {
  fetchDashboardCharts(): Promise<Chart[]>;
}

export const useCharts = (user: User): IChartsService => {
  return {
    fetchDashboardCharts: (): Promise<Chart[]> => {
      return new Promise((resolve, reject) => {
        const svg1: any = <svg   id="chart"   width="1000"   height="200"   viewBox="0 0 1000 200"   xmlns="http://www.w3.org/2000/svg" >     		     <path d="  M0,500  h40  v-264.87005974744403  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M50,500  h40  v-330.33021414738596  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M100,500  h40  v-251.9662548056994  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M150,500  h40  v-368.87349012509543  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M200,500  h40  v-353.56268066290784  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M250,500  h40  v-442.08112387136623  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M300,500  h40  v-219.32792729617017  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M350,500  h40  v-275.09026167890346  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M400,500  h40  v-248.15333710856714  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M450,500  h40  v-333.1691153774398  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M500,500  h40  v-202.07584075778726  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M550,500  h40  v-407.67923858405817  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M600,500  h40  v-367.6918162512922  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M650,500  h40  v-196.92213731150542  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M700,500  h40  v-231.66035307547145  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M750,500  h40  v-384.66498369190947  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M800,500  h40  v-229.22383598273996  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M850,500  h40  v-232.74690640533294  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M900,500  h40  v-125.29986381733363  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> <path d="  M950,500  h40  v-148.2556745281061  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#f7bc45" /> </svg>
        const svg2: any = <svg   id="chart"   width="1000"   height="200"   viewBox="0 0 1000 400"   xmlns="http://www.w3.org/2000/svg" >     		     <path d="  M0,500  h40  v-264.87005974744403  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M50,500  h40  v-330.33021414738596  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M100,500  h40  v-251.9662548056994  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M150,500  h40  v-368.87349012509543  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M200,500  h40  v-353.56268066290784  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M250,500  h40  v-442.08112387136623  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M300,500  h40  v-219.32792729617017  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M350,500  h40  v-275.09026167890346  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M400,500  h40  v-248.15333710856714  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M450,500  h40  v-333.1691153774398  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M500,500  h40  v-202.07584075778726  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M550,500  h40  v-407.67923858405817  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M600,500  h40  v-367.6918162512922  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M650,500  h40  v-196.92213731150542  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M700,500  h40  v-231.66035307547145  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M750,500  h40  v-384.66498369190947  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M800,500  h40  v-229.22383598273996  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M850,500  h40  v-232.74690640533294  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M900,500  h40  v-125.29986381733363  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> <path d="  M950,500  h40  v-148.2556745281061  q0,-4 -4,-4  h-32  q-4,0 -4,4  Z" fill="#3366aa" /> </svg>
        
        const response: Chart[] = [
          {
            title: "grafico andamento 1",
            svg: svg1
          },{
            title: "grafico andamento 2",
            svg: svg2
          },
        ];

        setTimeout(()=>{resolve(response)},1000)
      });
    },
  };
};