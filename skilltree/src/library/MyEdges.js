const edges = [
    //ines skilltree
    { source: "1", target: "2", key: "edge1_2" },
    { source: "1", target: "3", key: "edge2_3" },
  
    //art class
    { source: "2", target: "4", key: "edge2_4" },
    { source: "2", target: "5", key: "edge2_5" },
    { source: "2", target: "6", key: "edge2_6" },
  
    //gaming
    { source: "3", target: "7", key: "edge3_7" },
  
    //university
    { source: "6", target: "7", key: "edge6_7" },
  
    //drawing
    { source: "5", target: "8", key: "edge5_8" },
    { source: "5", target: "26", key: "edge5_26" },
  
    //photography
    { source: "26", target: "27", key: "edge26_27" },
    { source: "26", target: "28", key: "edge26_28" },
    { source: "28", target: "29", key: "edge28_29" },
    { source: "8", target: "29", key: "edge8_29" },
    { source: "28", target: "30", key: "edge27_30" },
  
    //video
    { source: "27", target: "30", key: "edge27_30" },
    { source: "27", target: "31", key: "edge27_31" },
    { source: "27", target: "32", key: "edge27_32" },
  
    //youtube
    { source: "31", target: "33", key: "edge31_33" },
    { source: "31", target: "34", key: "edge31_34" },
    { source: "32", target: "34", key: "edge31_34" },
  
    //gamedesign
    { source: "7", target: "8", key: "edge7_8" },
    { source: "7", target: "9", key: "edge7_9" },
    { source: "7", target: "10", key: "edge7_10" },
    { source: "7", target: "11", key: "edge7_11" },
  
    //Blender
    { source: "10", target: "12", key: "edge11_12" },
    { source: "10", target: "13", key: "edge7_11" },
  
    //Unity
    { source: "9", target: "14", key: "edge9_14" },
    { source: "9", target: "15", key: "edge9_15" },
    { source: "9", target: "16", key: "edge9_16" },
  
    //AR
    { source: "15", target: "17", key: "edge15_17" },
    { source: "17", target: "18", key: "edge17_18" },
    { source: "18", target: "19", key: "edge18_19" },
    { source: "15", target: "19", key: "edge15_19" },
  
    ///VR
    // { source: '16', target: '19', key: 'edge16_19'},
    { source: "16", target: "23", key: "edge16_23" },
    { source: "23", target: "20", key: "edge16_23" },
  
    //Javascript
    { source: "19", target: "20", key: "edge19_20" },
  
    //FrontEnd
    { source: "19", target: "21", key: "edge19_21" },
    { source: "19", target: "24", key: "edge19_24" },
    { source: "19", target: "25", key: "edge19_25" },
    { source: "21", target: "22", key: "edge21_22" },
  ];

  export default edges;