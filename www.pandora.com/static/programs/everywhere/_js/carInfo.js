
$(document).ready(function(){


 $('#model, #year, #make').change(function() {

  var year = $('#year').val();
  var model = $('#model').val();

  switch (model + "|" + year) {

	  //Acura
	  case "ILX|2013":
	  case "ILX|2014":
	  case "ILX|2015":
	  case "ILX|2016":
	  case "MDX|2014":
	  case "MDX|2015":
	  case "RDX|2013":
	  case "RDX|2014":
	  case "RDX|2015":
	  case "RDX|2016":
	  case "RLX|2014":
	  case "RLX|2015":
	  case "RLX|2016":
	  case "NSX|2016":
	  case "TLX|2015":
	  case "TLX|2016":


	  //BMW
	  case "1 Series|2011":
	  case "1 Series|2012":
	  case "1 Series|2013":
	  case "2 Series|2014":
	  case "2 Series|2015":
	  case "2 Series|2016":
	  case "3 Series|2011":
	  case "3 Series|2012":
	  case "3 Series|2013":
	  case "3 Series|2014":
	  case "3 Series|2015":
	  case "3 Series|2016":
	  case "4 Series|2011":
	  case "4 Series|2012":
	  case "4 Series|2013":
	  case "4 Series|2014":
	  case "4 Series|2015":
	  case "4 Series|2016":
	  case "5 Series|2011":
	  case "5 Series|2012":
	  case "5 Series|2013":
	  case "5 Series|2014":
	  case "5 Series|2015":
	  case "5 Series|2016":
	  case "6 Series|2011":
	  case "6 Series|2012":
	  case "6 Series|2013":
	  case "6 Series|2014":
	  case "6 Series|2015":
	  case "6 Series|2016":
	  case "7 Series|2011":
	  case "7 Series|2012":
	  case "7 Series|2013":
	  case "7 Series|2014":
	  case "7 Series|2015":
	  case "7 Series|2016":
	  case "X1|2013":
	  case "X1|2014":
	  case "X1|2015":
	  case "X1|2016":
	  case "X3|2011":
	  case "X3|2012":
	  case "X3|2013":
	  case "X3|2014":
	  case "X3|2015":
	  case "X3|2016":
	  case "X5|2011":
	  case "X5|2012":
	  case "X5|2013":
	  case "X5|2014":
	  case "X5|2015":
	  case "X5|2016":
	  case "X6|2011":
	  case "X6|2012":
	  case "X6|2013":
	  case "X6|2014":
	  case "X6|2015":
	  case "X6|2016":
	  case "Z4|2011":
	  case "Z4|2012":
	  case "Z4|2013":
	  case "Z4|2014":
	  case "Z4|2015":
	  case "Z4|2016":
	  case "	i3|2014":
	  case "i3|2015":
	  case "i3|2016":

	  //Buick
	  case "Enclave|2013":
	  case "Enclave|2014":
	  case "Enclave|2015":
	  case "Enclave|2016":
	  case "Encore|2014":
	  case "Encore|2015":
	  case "Encore|2016":
	  case "Lacrosse|2012":
	  case "Lacrosse|2013":
	  case "Lacrosse|2014":
	  case "Lacrosse|2015":
	  case "Lacrosse|2016":
	  case "Regal|2012":
	  case "Regal|2013":
	  case "Regal|2014":
	  case "Regal|2015":
	  case "Regal|2016":
	  case "Verano|2012":
	  case "Verano|2013":
	  case "Verano|2014":
	  case "Verano|2015":
	  case "Verano|2016":

	  //Cadillac
	  case "ATS|2013":
	  case "ATS|2014":
	  case "ATS|2015":
	  case "ATS|2016":
	  case "CTS|2014":
	  case "CTS|2015":
	  case "CTS|2016":
	  case "ELR|2014":
	  case "ELR|2015":
	  case "ELR|2016":
	  case "Escalade|2015":
	  case "Escalade|2016":
	  case "Escalade ESV|2015":
	  case "Escalade ESV|2016":
	  case "SRX|2013":
	  case "SRX|2014":
	  case "SRX|2015":
	  case "SRX|2016":
	  case "XTS|2013":
	  case "XTS|2014":
	  case "XTS|2015":
	  case "XTS|2016":

	  //Chevrolet
	  case "Camaro|2013":
	  case "Camaro|2014":
	  case "Camaro|2015":
	  case "Camaro|2016":
	  case "Colorado|2015":
	  case "Colorado|2016":
	  case "Corvette|2014":
	  case "Corvette|2015":
	  case "Corvette|2016":
	  case "Cruze|2013":
	  case "Cruze|2014":
	  case "Cruze|2015":
	  case "Cruze|2016":
	  case "Equinox|2012":
	  case "Equinox|2013":
	  case "Equinox|2014":
	  case "Equinox|2015":
	  case "Equinox|2016":
	  case "Impala|2014":
	  case "Impala|2015":
	  case "Impala|2016":
	  case "Malibu|2013":
	  case "Malibu|2014":
	  case "Malibu|2015":
	  case "Malibu|2016":
	  case "Malibu Eco|2013":
	  case "Silverado|2014":
	  case "Silverado|2015":
	  case "Silverado|2016":
	  case "Silverado 1500|2014":
	  case "Silverado 1500|2015":
	  case "Silverado 1500|2016":
	  case "Silverado 2500|2014":
	  case "Silverado 2500|2015":
	  case "Silverado 2500|2016":
	  case "Silverado 3500|2014":
	  case "Silverado 3500|2015":
	  case "Silverado 3500|2016":
	  case "Sonic|2013":
	  case "Sonic|2014":
	  case "Spark|2013":
	  case "Spark|2014":
	  case "SS|2014":
	  case "SS|2015":
	  case "SS|2016":
	  case "Suburban|2014":
	  case "Suburban|2015":
	  case "Suburban|2016":
	  case "Tahoe|2014":
	  case "Tahoe|2015":
	  case "Tahoe|2016":
	  case "Traverse|2013":
	  case "Traverse|2014":
	  case "Traverse|2015":
	  case "Traverse|2016":
	  case "Volt|2012":
	  case "Volt|2013":
	  case "Volt|2014":
	  case "Volt|2015":
	  case "Volt|2016":

	  //Chrysler
	  case "200|2015":
	  case "300|2015":

	  //Dodge
	  case "Challenger|2015":
	  case "Charger|2015":
	  case "Durango|2014":
	  case "Viper|2013":
	  case "Viper|2014":

	  //Ford
	  case "Edge|2014":
	  case "Edge|2015":
	  case "Edge|2016":
	  case "Escape|2014":
	  case "Escape|2015":
	  case "Escape|2016":
	  case "Explorer|2014":
	  case "Explorer|2015":
	  case "Explorer|2016":
	  case "Flex|2014":
	  case "Flex|2015":
	  case "Flex|2016":
	  case "Taurus|2014":
	  case "Taurus|2015":
	  case "Taurus|2016":
	  case "C-MAX Connect|2013":
	  case "C-MAX Connect|2014":
	  case "C-MAX Connect|2015":
	  case "C-MAX Connect|2016":
	  case "E-Series|2012":
	  case "E-Series|2013":
	  case "E-Series|2014":
	  case "E-Series|2015":
	  case "E-Series|2016":
	  case "Focus|2013":
	  case "Focus|2014":
	  case "Focus|2015":
	  case "Focus|2016":
	  case "Transit Connect|2014":
	  case "Transit Connect|2015":
	  case "Transit Connect|2016":
	  case "Expedition|2012":
	  case "Expedition|2013":
	  case "Expedition|2014":
	  case "Expedition|2015":
	  case "Expedition|2016":
	  case "F-150|2012":
	  case "F-150|2013":
	  case "F-150|2014":
	  case "F-150|2015":
	  case "F-150|2016":
	  case "F-250|2012":
	  case "F-250|2013":
	  case "F-250|2014":
	  case "F-250|2015":
	  case "F-250|2016":
	  case "F-350|2012":
	  case "F-350|2013":
	  case "F-350|2014":
	  case "F-350|2015":
	  case "F-350|2016":
	  case "F-450|2012":
	  case "F-450|2013":
	  case "F-450|2014":
	  case "F-450|2015":
	  case "F-450|2016":
	  case "Fusion|2012":
	  case "Fusion|2013":
	  case "Fusion|2014":
	  case "Fusion|2015":
	  case "Fusion|2016":
	  case "Mustang|2012":
	  case "Mustang|2013":
	  case "Mustang|2014":
	  case "Mustang|2015":
	  case "Mustang|2016":
	  case "Fiesta|2011":
	  case "Fiesta|2012":
	  case "Fiesta|2013":
	  case "Fiesta|2014":
	  case "Fiesta|2015":
	  case "Fiesta|2016":

	  //GMC
	  case "Acadia|2013":
	  case "Acadia|2014":
	  case "Acadia|2015":
	  case "Acadia|2016":
	  case "Canyon|2015":
	  case "Canyon|2016":
	  case "Sierra 1500|2014":
	  case "Sierra 1500|2015":
	  case "Sierra 1500|2016":
	  case "Sierra 2500|2014":
	  case "Sierra 2500|2015":
	  case "Sierra 2500|2016":
	  case "Sierra 3500|2014":
	  case "Sierra 3500|2015":
	  case "Sierra 3500|2016":
	  case "Terrain|2012":
	  case "Terrain|2013":
	  case "Terrain|2014":
	  case "Terrain|2015":
	  case "Terrain|2016":
	  case "Yukon|2015":
	  case "Yukon|2016":
	  case "Yukon XL|2015":
	  case "Yukon XL|2016":

	  //Holden
	  case "Astra|2015":
	  case "Astra|2016":
	  case "Barina|2012":
	  case "Barina|2013":
	  case "Barina|2014":
	  case "Barina|2015":
	  case "Barina|2016":
	  case "Caprice|2013":
	  case "Caprice|2014":
	  case "Caprice|2015":
	  case "Caprice|2016":
	  case "Cascada|2015":
	  case "Cascada|2016":
	  case "Colorado|2013":
	  case "Colorado|2014":
	  case "Colorado|2015":
	  case "Colorado|2016":
	  case "Colorado 7|2013":
	  case "Colorado 7|2014":
	  case "Colorado 7|2015":
	  case "Colorado 7|2016":
	  case "Commodore|2013":
	  case "Commodore|2014":
	  case "Commodore|2015":
	  case "Commodore|2016":
	  case "Cruze|2013":
	  case "Cruze|2014":
	  case "Cruze|2015":
	  case "Cruze|2016":
	  case "Malibu|2013":
	  case "Malibu|2014":
	  case "Malibu|2015":
	  case "Malibu|2016":
	  case "Trax|2013":
	  case "Trax|2014":
	  case "Trax|2015":
	  case "Trax|2016":

	  //Honda

	  case "Accord|2013":
	  case "Accord|2014":
	  case "Accord|2015":
	  case "Accord|2016":
	  case "Civic|2013":
	  case "Civic|2014":
	  case "Civic|2015":
	  case "Civic|2016":
	  case "Crosstour|2013":
	  case "Crosstour|2014":
	  case "Crosstour|2015":
	  case "Crosstour|2016":
	  case "CR-V|2012":
	  case "CR-V|2013":
	  case "CR-V|2014":
	  case "CR-V|2015":
	  case "CR-V|2016":
	  case "CR-Z|2013":
	  case "CR-Z|2014":
	  case "CR-Z|2015":
	  case "CR-Z|2016":
	  case "Fit|2015":
	  case "Fit|2016":
	  case "Odyssey|2014":
	  case "Odyssey|2015":
	  case "Odyssey|2016":
	  case "HR-V|2016":
	  case "HR-V|2016":

	  //Hyundai
	  case "Azera|2015":
	  case "Azera|2016":
	  case "Elantra|2014":
	  case "Elantra|2015":
	  case "Elantra|2016":
	  case "Genesis|2015":
	  case "Genesis|2016":
	  case "Sonata|2015":
	  case "Sonata|2016":
	  case "Tucson|2015":
	  case "Tucson|2016":
	  case "Veloster|2012":
	  case "Veloster|2013":
	  case "Veloster|2014":
	  case "Veloster|2015":
	  case "Veloster|2016":
	  case "Veracruz|2012":

	  //Infiniti
	  case "Q50|2014":
	  case "Q70|2015":
	  case "QX50|2015":
	  case "QX80|2015":

	  //Jeep
	  case "Cherokee|2014":
	  case "Cherokee|2015":
	  case "Cherokee|2016":
	  case "Grand Cherokee|2014":
	  case "Grand Cherokee|2015":
	  case "Grand Cherokee|2016":

	  //Kia
	  case "Forte|2015":
	  case "Forte|2016":
	  case "K900|2015":
	  case "K900|2016":
	  case "Optima|2014":
	  case "Optima|2015":
	  case "Optima|2016":
	  case "Sedona|2015":
	  case "Sedona|2016":
	  case "Sorento|2014":
	  case "Sorento|2015":
	  case "Sorento|2016":
	  case "Soul|2014":
	  case "Soul|2015":
	  case "Soul|2016":
	  case "Sportage|2014":
	  case "Sportage|2015":
	  case "Sportage|2016":

	  //Lexus
	  case "CT|2013":
	  case "CT|2014":
	  case "CT|2015":
	  case "CT|2016":
	  case "ES|2013":
	  case "ES|2014":
	  case "ES|2015":
	  case "ES|2016":
	  case "GS|2013":
	  case "GS|2014":
	  case "GS|2015":
	  case "GS|2016":
	  case "GX|2014":
	  case "GX|2015":
	  case "GX|2016":
	  case "IS|2013":
	  case "IS|2014":
	  case "IS|2015":
	  case "IS|2016":
	  case "LS|2013":
	  case "LS|2014":
	  case "LS|2015":
	  case "LS|2016":
	  case "LX|2013":
	  case "LX|2014":
	  case "LX|2015":
	  case "LX|2016":
	  case "RX|2013":
	  case "RX|2014":
	  case "RX|2015":
	  case "RX|2016":

	  //Lincoln
	  case "MKZ|2012":
	  case "MKC|2016":
	  case "MKS|2016":
	  case "MKT|2016":
	  case "Navigator|2012":
	  case "Navigator|2016":

	  //Mazda
	  case "CX-3|2016":
	  case "CX-5|2014":
	  case "CX-5|2015":
	  case "CX-5|2016":
	  case "CX-9|2013":
	  case "CX-9|2014":
	  case "CX-9|2015":
	  case "CX-9|2016":
	  case "Mazda3|2013":
	  case "Mazda3|2014":
	  case "Mazda3|2015":
	  case "Mazda3|2016":
	  case "Mazda6|2014":
	  case "Mazda6|2015":
	  case "Mazda6|2016":
	  case "MX-5|2016":

	  //Mercedes Benz
	  case "Any Model|2010":
	  case "Any Model|2011":

	  //Mini
	  case "Clubman|2011":
	  case "Clubman|2012":
	  case "Clubman|2013":
	  case "Clubman|2014":
	  case "Countryman|2011":
	  case "Countryman|2012":
	  case "Countryman|2013":
	  case "Countryman|2014":
	  case "Countryman|2015":
	  case "Countryman|2016":
	  case "Hardtop 2-Door|2011":
	  case "Hardtop 2-Door|2012":
	  case "Hardtop 2-Door|2013":
	  case "Hardtop 2-Door|2014":
	  case "Hardtop 2-Door|2015":
	  case "Hardtop 2-Door|2016":
	  case "Hardtop 4-Door|2011":
	  case "Hardtop 4-Door|2012":
	  case "Hardtop 4-Door|2013":
	  case "Hardtop 4-Door|2014":
	  case "Hardtop 4-Door|2015":
	  case "Hardtop 4-Door|2016":
	  case "Paceman|2013":
	  case "Paceman|2014":
	  case "Paceman|2015":
	  case "Paceman|2016":
	  case "Convertible|2011":
	  case "Convertible|2012":
	  case "Convertible|2013":
	  case "Convertible|2014":
	  case "Convertible|2015":
	  case "Convertible|2016":
	  case "Coupe|2011":
	  case "Coupe|2012":
	  case "Coupe|2013":
	  case "Coupe|2014":
	  case "Coupe|2015":
	  case "Roadster|2012":
	  case "Roadster|2013":
	  case "Roadster|2014":
	  case "Roadster|2015":

	  //Nissan
	  case "Altima|2013":
	  case "Altima|2014":
	  case "Altima|2015":
	  case "Altima|2016":
	  case "Frontier|2013":
	  case "Frontier|2014":
	  case "Frontier|2015":
	  case "Frontier|2016":
	  case "Juke|2015":
	  case "Juke|2016":
	  case "Leaf|2013":
	  case "Leaf|2014":
	  case "Leaf|2015":
	  case "Leaf|2016":
	  case "Maxima|2015":
	  case "Maxima|2016":
	  case "Murano|2015":
	  case "Murano|2016":
	  case "NV 200|2013":
	  case "NV 200|2014":
	  case "NV 200|2015":
	  case "NV 200|2016":
	  case "Pathfinder|2015":
	  case "Pathfinder|2016":
	  case "Rogue|2014":
	  case "Rogue|2015":
	  case "Rogue|2016":
	  case "Sentra|2013":
	  case "Sentra|2014":
	  case "Sentra|2015":
	  case "Sentra|2016":
	  case "Titan|2013":
	  case "Titan|2014":
	  case "Titan|2015":
	  case "Titan|2016":
	  case "Versa|2014":
	  case "Versa|2015":
	  case "Versa|2016":
	  case "Versa Note|2014":
	  case "Versa Note|2015":
	  case "Versa Note|2016":
	  case "Xterra|2013":
	  case "Xterra|2014":
	  case "Xterra|2015":
	  case "Xterra|2016":
	  case "Quest|2016":
	  case "Armada|2016":

	  //RAM
	  case "1500 (DS)|2014":
	  case "1500 (DS)|2015":
	  case "1500 (DS)|2016":
	  case "2500 (DJ)|2014":
	  case "2500 (DJ)|2015":
	  case "2500 (DJ)|2016":
	  case "3500 (D2)|2014":
	  case "3500 (D2)|2015":
	  case "3500 (D2)|2016":
	  case "Cab Chassis (DD/DP)|2014":
	  case "Cab Chassis (DD/DP)|2015":
	  case "Cab Chassis (DD/DP)|2016":

	  //Scion
	  case "FR-S|2012":
	  case "iQ|2011":
	  case "iQ|2012":
	  case "tC|2011":
	  case "tC|2012":
	  case "xB|2011":
	  case "xB|2012":
	  case "xD|2011":
	  case "xD|2012":

	  //Subaru
	  case "Forester|2015":
	  case "Forester|2016":
	  case "Impreza|2015":
	  case "Impreza|2016":
	  case "Legacy|2015":
	  case "Legacy|2016":
	  case "Outback|2015":
	  case "Outback|2016":
	  case "Crosstrek|2015":
	  case "Crosstrek|2016":
	  case "BRZ|2015":
	  case "BRZ|2016":
	  case "WRX/STI|2016":

	  //Suzuki
	  case "Grand Vitara|2013":
	  case "Kizashi|2013":
	  case "SX-4|2013":

	  //Toyota
	  case "4 Runner|2012":
	  case "4 Runner|2013":
	  case "4 Runner|2014":
	  case "4 Runner|2015":
	  case "4 Runner|2016":
	  case "Avalon|2013":
	  case "Avalon|2014":
	  case "Avalon|2015":
	  case "Avalon|2016":
	  case "Camry|2012":
	  case "Camry|2013":
	  case "Camry|2014":
	  case "Camry|2015":
	  case "Camry|2016":
	  case "Corolla|2012":
	  case "Corolla|2013":
	  case "Corolla|2014":
	  case "Corolla|2015":
	  case "Corolla|2016":
	  case "Highlander|2013":
	  case "Highlander|2014":
	  case "Highlander|2015":
	  case "Highlander|2016":
	  case "Land Cruiser|2013":
	  case "Land Cruiser|2014":
	  case "Land Cruiser|2015":
	  case "Land Cruiser|2016":
	  case "Prius|2012":
	  case "Prius|2013":
	  case "Prius|2014":
	  case "Prius|2015":
	  case "Prius|2016":
	  case "Prius C|2012":
	  case "Prius C|2013":
	  case "Prius C|2014":
	  case "Prius C|2015":
	  case "Prius C|2016":
	  case "Prius Plug-in|2012":
	  case "Prius Plug-in|2013":
	  case "Prius Plug-in|2014":
	  case "Prius Plug-in|2015":
	  case "Prius Plug-in|2016":
	  case "Prius V|2012":
	  case "Prius V|2013":
	  case "Prius V|2014":
	  case "Prius V|2015":
	  case "Prius V|2016":
	  case "Rav 4|2012":
	  case "Rav 4|2013":
	  case "Rav 4|2014":
	  case "Rav 4|2015":
	  case "Rav 4|2016":
	  case "Sequoia|2012":
	  case "Sequoia|2013":
	  case "Sequoia|2014":
	  case "Sequoia|2015":
	  case "Sequoia|2016":
	  case "Sienna|2013":
	  case "Sienna|2014":
	  case "Sienna|2015":
	  case "Sienna|2016":
	  case "Tacoma|2012":
	  case "Tacoma|2013":
	  case "Tacoma|2014":
	  case "Tacoma|2015":
	  case "Tacoma|2016":
	  case "Tundra|2012":
	  case "Tundra|2013":
	  case "Tundra|2014":
	  case "Tundra|2015":
	  case "Tundra|2016":
	  case "Venza|2013":
	  case "Venza|2014":
	  case "Venza|2015":
	  case "Venza|2016":

	  //Volvo
	  case "S60|2015":
	  case "S60|2016":
	  case "S80|2015":
	  case "S80|2016":
	  case "V60|2015":
	  case "V60|2016":
	  case "XC60|2015":
	  case "XC60|2016":
	  case "XC70|2015":
	  case "XC70|2016":

	  // //Make
	  // case "Model|2009":
	  // case "Model|2010":
	  // case "Model|2011":
	  // case "Model|2012":
	  // case "Model|2013":
	  // case "Model|2014":
	  // case "Model|2015":
	  // case "Model|2016":





    availability = '<h3 class="available">Awesome! Pandora is integrated into your ride. Ask your local dealer or check your owner’s manual for more information.</h3>'
    break;

    default:
    availability = '<h3>Pandora is available via Bluetooth or aux jack only. Ask your local dealer or check your owner’s manual for more information.</h3>';
  }


  })

});