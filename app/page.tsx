"use client"
import React, { useEffect, useRef } from 'react';
import { attachments, titleInfo } from '@/lib/getItemsInfo';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import * as am5xy from '@amcharts/amcharts5/xy';
import Link from 'next/link';
import './globals.css';

// TODO, add the existing data to the chart and adjust their alignment.

function makeSeries(
  chart: any,
  xAxis: any,
  yAxis: any,
  root: any,
  data: any,
  legend: any,
  name: string,
  fieldName: string
) {
    const series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "year",
    }));

    series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}:{valueY}",
        width: am5.percent(90),
        tooltipY: 0,
    });

    series.bullets.push(() => {
        return am5.Bullet.new(root, {
            locationY: 0.5,
            sprite: am5.Label.new(root, {
                text: "{valueY}",
                fill: root.interfaceColors.get("alternativeText"),
                centerY: am5.p50,
                centerX: am5.p50,
                populateText: true,
            }),
        });
    });

    series.data.setAll(data);
    series.appear();
    legend.data.push(series);
}

function ChartBuilder() {
        
    const chartDivRef = useRef(null);

    useEffect(() => {

        if (typeof window !== 'undefined') {
            
            // Create a root on a div element for the chart
            const root = am5.Root.new(chartDivRef.current);

            root.setThemes([am5themes_Animated.new(root)]);

            const chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                layout: root.verticalLayout,
            }));

            const data: Weaponse[] = [
                {
                    id: 1,
                    Type: "Mod",
                    Name: "Breacher Device",
                    SubType: "Muzzle",
                    Weapon: 725,
                    Accuracy: 0,
                    Damage: 0,
                    Range: 0,
                    FireRate: 0,
                    Mobility: -6,
                    Control: -7,
                    Pros: "Melee Quickness",
                },
            ];

            const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                        categoryField: "year",
                        renderer: am5xy.AxisRendererX.new(root, {
                        cellStartLocation: 0.1,
                        cellEndLocation: 0.9,
                    }),
                    tooltip: am5.Tooltip.new(root, {}),
            }));

            xAxis.data.setAll(data);

            const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            }));

            const legend = chart.children.push(am5.Legend.new(root, {
                centerX: 0,
                x: 0,
                paddingLeft: 0,
            }));

            yAxis.events.on("boundschanged", function () {
                legend.set("dx", yAxis.width() + chart.get("paddingLeft", 0));
            });

            makeSeries(chart, xAxis, yAxis, root, data, legend, "Weapone", "Weapone");
            makeSeries(chart, xAxis, yAxis, root, data, legend, "Accuracy", "Accuracy");
            makeSeries(chart, xAxis, yAxis, root, data, legend, "Damage", "Damage");
            makeSeries(chart, xAxis, yAxis, root, data, legend, "Range", "Range");
            makeSeries(chart, xAxis, yAxis, root, data, legend, "FireRate", "FireRate");
            makeSeries(chart, xAxis, yAxis, root, data, legend, "Control", "Control");

            chart.appear(1000, 100);
        }
    }, []);

    return (
        <div>
            <div ref={chartDivRef} id="chartdiv" className="bg-zinc-600 w-full h-96"></div>
        </div>
    );
}

export default function MainPage(): React.JSX.Element {

    const switcher = (num: any) => {
        if (!(num === undefined)) {
            return (num % 2 === 0) ? " ": "bg-zinc-950"; 
        }
    };

    return (
        <main>
            <section>
                <h1 className='text-6xl text-center mt-7'>CoD WarZone</h1>
                <div className='bg-zinc-900 w-3/4 h-auto m-auto mt-20'>
                    {titleInfo.map((titles: Weaponse) => (
                        <div key={titles.id} className='flex flex-row justify-between bg-red-500 p-2 text-sm mt-2'>
                            <span className='pr-7'>{titles.Type}</span>
                            <span className='w-28'>{titles.Name}</span>
                            <span>{titles.SubType}</span>
                            <span>{titles.Weapon}</span>
                            <span>{titles.Accuracy}</span>
                            <span>{titles.Damage}</span>
                            <span>{titles.Range}</span>
                            <span>{titles.FireRate}</span>
                            <span>{titles.Mobility}</span>
                            <span className='w-52'>{titles.Pros}</span>
                        </div>
                    ))}

                    {attachments.map((items: Weaponse) => (
                        <Link key={items.id} href={`#${items.id}`}>
                            <div
                                className={`${switcher(items.id)} flex flex-row justify-between p-2 text-sm mt-2 cursor-pointer hover:bg-stone-700`}
                            >
                                <span>{items.Type}</span>
                                <span className='w-28'>{items.Name}</span>
                                <span>{items.SubType}</span>
                                <span>{items.Weapon}</span>
                                <span>{items.Accuracy}</span>
                                <span>{items.Damage}</span>
                                <span>{items.Range}</span>
                                <span>{items.FireRate}</span>
                                <span>{items.Mobility}</span>
                                <span className='w-52'>{items.Pros}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section id='1'>
                <div className={`flex flex-col text-sm mt-2 justify-around p-5 cursor-default bg-zinc-700 w-60 h-60`}>
                    <span>Name: {attachments[0].Name}</span>
                    <span>Weapone: {attachments[0].Weapon}</span>
                    <span>Accuracy: {attachments[0].Accuracy}</span>
                    <span>Damage: {attachments[0].Damage}</span>
                    <span>Range: {attachments[0].Range}</span>
                    <span>FireRate: {attachments[0].FireRate}</span>
                    <span>Mobility: {attachments[0].Mobility}</span>
                </div>
                <ChartBuilder />
            </section>
        </main>
    );
}