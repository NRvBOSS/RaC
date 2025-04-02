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
                images: [
                  "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/ctjvjtjfxqavguj60uss.jpg",
                  "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/raqc0fhylroix2detzyb.jpg",
                ],
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
                images: [],
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
              },
              {
                id: 7,
                name: "Porsche 911 GT3",
                year: 2022,
                sale: false,
                rent: true,
                people: 2,
                engine: "	4.0L H6",
                gearbox: "	8 Speed Dual Clutch Trans",
                gear: "Gasoline",
                price: 500000,
                image: "https://www.mclarencf.com/imagetag/334/4/l/Used-2022-Porsche-911-GT3-GT3.jpg"
              }

        ]
    })
})

export default useInfoStore;