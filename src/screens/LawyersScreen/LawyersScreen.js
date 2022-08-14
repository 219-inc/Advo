import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import Speciality from 'component/Speciality'

let lawyers = [
  {
    name: "Intellectual Property",
    description: "Intellectual Property Lawyer",
    image: "https://cdn-icons-png.flaticon.com/512/951/951773.png",
  },
  {
    name: "Public Interest",
    description: "Public Interest Lawyer",
    image: "https://cdn-icons-png.flaticon.com/512/2748/2748099.png",
  },
  {
    name: "Tax",
    description: "Tax Lawyer",
    image: "https://cdn-icons-png.flaticon.com/512/4222/4222023.png",
  },
  {
    name: "Corporate",
    description: "Corporate Lawyers",
    image: "https://plus.safety4sea.com/wp-content/uploads/Corporate-icon.png",
  },
  {
    name: "Criminal",
    description: "Criminal Lawyer",
    image:
      "https://www.clipartmax.com/png/middle/98-986923_crime-icons-criminal-record-icon.png",
  },
  {
    name: "Family",
    description: "Family Lawyer",
    image:
      "https://toppng.com/uploads/preview/family-icon-115499247590bm8ocmnlc.png",
  },
  {
    name: "Personal Injury",
    description: "Personal Injury Lawyer",
    image: "https://cdn-icons-png.flaticon.com/128/2873/2873008.png",
  },
  {
    name: "Business",
    description: "Business Lawyer",
    image: "https://cdn-icons-png.flaticon.com/512/1933/1933920.png",
  },
  {
    name: "Entertainment",
    description: "Entertainment Lawyer",
    image: "https://cdn-icons-png.flaticon.com/512/2285/2285980.png",
  },
  {
    name: "Immigration",
    image: "https://cdn-icons-png.flaticon.com/512/3125/3125725.png",
  },
  {
    name: "Civil Rights",
    image: "https://cdn-icons-png.flaticon.com/512/4464/4464159.png",
  },
  {
    name: "Environmental",
    image: "https://cdn-icons-png.flaticon.com/512/525/525903.png",
  },
  {
    name: "Estate Planning",
    image: "https://static.thenounproject.com/png/1464334-200.png",
  },
  {
    name: "Civil Litigation",
    image: "https://cdn-icons-png.flaticon.com/512/4464/4464159.png",
  },
  {
    name: "Constitutional",
    image:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/constitution-law-crime-judge-court-police-1-42673.png",
  },
  {
    name: "Real Estate",
    image: "https://cdn-icons-png.flaticon.com/512/602/602275.png",
  },
  {
    name: "Bankruptcy",
    image: "https://cdn-icons-png.flaticon.com/512/1999/1999238.png",
  },
  {
    name: "Labour",
    image: "https://cdn-icons-png.flaticon.com/512/4312/4312405.png",
  },
  {
    name: "Malpractice",
    image: "https://www.nicepng.com/png/full/312-3123351_sistema-legal-png.png",
  },
  {
    name: "Toxic Tort",
    image:
      "https://media.istockphoto.com/vectors/environmental-and-toxic-tort-insurance-coverage-concept-hazard-vector-id1298297532?b=1&k=20&m=1298297532&s=170667a&w=0&h=sIDxTWBgAjLTtJrVeDgGRuDDD-59Om4MYdIMi8dh9Rw=",
  },
  {
    name: "Contract",
    image:
      "https://cdn3.iconfinder.com/data/icons/gig-economy-3/512/EmploymentContract-contract-agreement-job-work-employ-deal-sign-application-company-corporate-512.png",
  },
  {
    name: "Employment",
    image:
      "https://www.clipartmax.com/png/middle/25-258908_employment-icon.png",
  },
];

function SortArray(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

const LawyersScreen = () => {
  lawyers = lawyers.sort(SortArray);
  return (
    <View style={tw`bg-white pt-4 px-4 h-full`}>
      <Text style={tw`text-3xl font-semibold`}>Consult by speciality</Text>
      <Text style={tw`text-gray-600`}>Find lawyers by their speciality</Text>
      <ScrollView
        style={tw`my-4`}
        contentContainerStyle={tw`flex-row flex-wrap justify-center`}
      >
        {lawyers.map((lawyer) => (
          <Speciality key={lawyer.name} title={lawyer.name} icon={lawyer.image} />
        ))}
      </ScrollView>
    </View>
  );
}

export default LawyersScreen