import AppFooter from "@/views/AppFooter.vue";
import { defineStore } from "pinia";

export const useInfoStore = defineStore("infoStore", {
    state: () => ({
        cars:[
            {
                id: 1,
                name: "Hyundai Elantra",
                year: 2009,
                sale: true,
                rent: false,
                people: 4,
                engine: "1.6L 4-cylinder",
                gearbox: "Automatic",
                gear: "Oil",
                price: 15000,
                image:
                  "https://images.dealersync.com/2520/Photos/866026/20220812014223734_IMG_1287.jpg?_=78461920c722199df18633aa6f969fbbacd7c37d",
                owner: "Orxan",
                city: "Baku"
              },
              {
                id: 2,
                name: "Hyundai Sonata",
                year: 2009,
                sale: true,
                rent: false,
                people: 4,
                engine: "2.4L 4-cylinder",
                gearbox: "Automatic",
                gear: "Oil",
                price: 20000,
                image: "https://bumer.az/oc-content/uploads/23/11573.jpg",
                owner: "John",
                city: "London"
                            },
              {
                id: 3,
                name: "Hyundai Santa Fe",
                year: 2019,
                sale: false,
                rent: true,
                people: 4,
                engine: "2.4L 4-cylinder",
                gearbox: "Automatic",
                gear: "Oil",
                price: 75000,
                image:
                  "https://turbo.azstatic.com/uploads/f460x343/2025%2F02%2F19%2F11%2F51%2F10%2F6d767674-44ab-487e-b5e9-ccf6d79940e5%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg",
                  owner: "Asya",
                city: "Istanbul"
              },
              {
                id: 4,
                name: "Chevrolet Equinox",
                year: 2018,
                sale: false,
                rent: true,
                people: 4,
                engine: "1.5L 4-cylinder",
                gearbox: "Automatic",
                gear: "Oil",
                price: 24600,
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Chevrolet_Equinox_LT_%28III%2C_Facelift%29_%E2%80%93_f_05102022.jpg/800px-Chevrolet_Equinox_LT_%28III%2C_Facelift%29_%E2%80%93_f_05102022.jpg",
                  owner: "Clark Kent",
                city: "New-York"
              },
              {
                id: 5,
                name: "Ford Raptor",
                year: 2022,
                sale: false,
                rent: true,
                people: 4,
                engine: "3.5L V6",
                gearbox: "Automatic",
                gear: "Diesel",
                price: 80000,
                image: "https://vigoasia.com/assets/product_photos/2878/64e5c6d03db7a.jpg",
                owner: "Bruce Wayne",
                city: "Gotham"
              },
              {
                id: 6,
                name: "Mercedes GLS 450",
                year: 2019,
                sale: true,
                rent: false,
                people: 7,
                engine: "3.0L V6",
                gearbox: "Automatic",
                gear: "Plug-in Hybrid",
                price: 120000,
                image:
                  "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/177511/maybach-gls-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80&q=80",
                  owner: "Nick Woltemade",
                city: "Stuttgart"
              },
              {
                id: 7,
                name: "Porsche 911 GT3",
                year: 2022,
                sale: false,
                rent: true,
                people: 2,
                engine: "	4.0L H6",
                gearbox: "8 Speed Dual Clutch",
                gear: "Gasoline",
                price: 500000,
                image: "https://www.mclarencf.com/imagetag/334/4/l/Used-2022-Porsche-911-GT3-GT3.jpg",
                owner: "Alihüseyn",
                city: "Edinburgh"
              },
              {
                id: 8,
                name: "Range Rover Evoque",
                year: 2020,
                sale: true,
                rent: false,
                people: 4,
                engine: "	2.0L",
                gearbox: "Automatic",
                gear: "Diesel",
                price: 35000,
                image: "https://4x4vehiclehire.co.uk/wp-content/uploads/2014/09/rr_evq_12my_media_drive_280711_13_LowRes.jpg",
                owner: "Nuray",
                city: "Tokyo"
              }
      ]
        
    })
})

export default useInfoStore;