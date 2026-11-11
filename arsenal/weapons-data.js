(() => {
    const suppressorIcon = "/images/weapons/suppressor.png";
    const makeSuppressor = (label, image, extra = {}) => ({ label, image, ...extra });
    const buildImmortalSuppressors = () => ([
      makeSuppressor("Immortal 1", "/images/weapons/suppressor/supp_immortal_1.png"),
      makeSuppressor("Immortal 2", "/images/weapons/suppressor/supp_immortal_2.png"),
      makeSuppressor("Immortal 3", "/images/weapons/suppressor/supp_immortal_3.png"),
      makeSuppressor("Immortal 4", "/images/weapons/suppressor/supp_immortal_4.png"),
      makeSuppressor("Immortal 5", "/images/weapons/suppressor/supp_immortal_5.png"),
      makeSuppressor("Immortal 6", "/images/weapons/suppressor/supp_immortal_6.png"),
      makeSuppressor("Immortal 7", "/images/weapons/suppressor/supp_immortal_7.png"),
      makeSuppressor("Immortal 8", "/images/weapons/suppressor/supp_immortal_8.png")
    ]);
    const pistolSuppressorGallery = [
      "/images/weapons/suppressor/supp_pistol_black.png",
      "/images/weapons/suppressor/supp_pistol_white.png",
      "/images/weapons/suppressor/supp_pistol_camo1.png",
      "/images/weapons/suppressor/supp_pistol_camo2.png",
      "/images/weapons/suppressor/supp_pistol_camo3.png",
      "/images/weapons/suppressor/supp_pistol_camo4.png",
      "/images/weapons/suppressor/supp_pistol_camo5.png",
      "/images/weapons/suppressor/supp_pistol_camo6.png",
      "/images/weapons/suppressor/supp_pistol_camo7.png"
    ];
    const saiga9SuppressorGallery = [
      "/images/weapons/suppressor/supp_saiga9.png",
      "/images/weapons/suppressor/supp_saiga9_black.png",
      "/images/weapons/suppressor/supp_saiga9_white.png",
      "/images/weapons/suppressor/supp_saiga9_camo1.png",
      "/images/weapons/suppressor/supp_saiga9_camo2.png",
      "/images/weapons/suppressor/supp_saiga9_camo3.png",
      "/images/weapons/suppressor/supp_saiga9_camo4.png",
      "/images/weapons/suppressor/supp_saiga9_camo5.png",
      "/images/weapons/suppressor/supp_saiga9_camo6.png",
      "/images/weapons/suppressor/supp_saiga9_camo7.png"
    ];
    const galilSuppressorGallery = [
      "/images/weapons/suppressor/supp_galil_black.png",
      "/images/weapons/suppressor/supp_galil_beige.png",
      "/images/weapons/suppressor/supp_galil_green.png",
      "/images/weapons/suppressor/supp_galil_white.png"
    ];
    const cloneSuppressor = (item) => ({
      ...item,
      gallery: Array.isArray(item.gallery) ? [...item.gallery] : item.gallery
    });
    const cloneSuppressors = (items) => items.map(cloneSuppressor);
    const SUPPRESSOR_PRESETS = {
      natoImmortal: [
        makeSuppressor("NATO", "/images/weapons/suppressor/supp_nato.png"),
        makeSuppressor("Bloody", "/images/weapons/suppressor/supp_bloody.png"),
        makeSuppressor("Самодельный", "/images/weapons/suppressor/supp_improv.png"),
        ...buildImmortalSuppressors()
      ],
      pbsImmortal: [
        makeSuppressor("PBS", "/images/weapons/suppressor/supp_pbs.png"),
        makeSuppressor("Самодельный", "/images/weapons/suppressor/supp_improv.png"),
        ...buildImmortalSuppressors()
      ],
      pistolImmortal: [
        makeSuppressor("Самодельный", "/images/weapons/suppressor/supp_improv.png"),
        makeSuppressor("Пистолетный", "/images/weapons/suppressor/supp_pistol_black.png", {
          gallery: pistolSuppressorGallery
        }),
        ...buildImmortalSuppressors()
      ],
      rifleImmortal: [
        makeSuppressor("Винтовочный 2", "/images/weapons/suppressor/supp_rifle.png"),
        makeSuppressor("Самодельный", "/images/weapons/suppressor/supp_improv.png"),
        ...buildImmortalSuppressors()
      ],
      saiga9Immortal: [
        makeSuppressor("Saiga-9", "/images/weapons/suppressor/supp_saiga9.png", {
          gallery: saiga9SuppressorGallery
        })
      ],
      galilImmortal: [
        makeSuppressor("Galil", "/images/weapons/suppressor/supp_galil_black.png", {
          gallery: galilSuppressorGallery
        })
      ]
    };
    const suppressorPreset = (name) => cloneSuppressors(SUPPRESSOR_PRESETS[name] || []);
    const seriesData = [
      {
        id: "auk",
        name: "Auk Collection",
        kicker: "Серия",
        description: "Оружие, которое можно выиграть на аукционе.",
        weapons: [
          {
            name: "Type-85",
            image: "/images/weapons/auk/auk_type85.png",
            gallery: [
              "/images/weapons/auk/auk_type85.png"
            ],
            colors: ["Стандарт"],
            damage: "23500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png"
            },
            magazine: "",
            magTypes: ["200", "400"],
            magPreview: {
              image: "/images/weapons/immortal/auk_type85_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "XRK M4",
            image: "/images/weapons/auk/auk_xrk.png",
            gallery: [
              "/images/weapons/auk/auk_xrk.png"
            ],
            colors: ["Стандарт"],
            damage: "30500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Immortal",
              image: "/images/weapons/ammo/immortal_556x45.png"
            },
            magazine: "",
            magTypes: ["300", "500"],
            magPreview: {
              image: "/images/weapons/immortal/auk_xrk_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "KSP-58",
            image: "/images/weapons/auk/auk_ksp58.png",
            gallery: [
              "/images/weapons/auk/auk_ksp58.png"
            ],
            colors: ["Стандарт"],
            damage: "18900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Bloody",
              image: "/images/weapons/ammo/bloody_762x39.png"
            },
            magazine: "",
            magTypes: ["200", "400"],
            magPreview: {
              image: "/images/weapons/bloody/auk_ksp58_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AX-50",
            image: "/images/weapons/auk/bloody_ax50.png",
            gallery: [
              "/images/weapons/auk/bloody_ax50.png"
            ],
            colors: ["Стандарт"],
            damage: "6000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Стандартный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png"
            },
            magazine: "",
            magTypes: ["10"],
            magPreview: {
              image: "/images/weapons/auk/bloody_ax50_mag.png"
            }
          },
          {
            name: "VR-80",
            image: "/images/weapons/auk/gun_vr80.png",
            gallery: [
              "/images/weapons/auk/gun_vr80.png"
            ],
            colors: ["Стандарт"],
            damage: "86400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "300",
            ammo: {
              label: "12x70 Immortal",
              image: "/images/weapons/ammo/immortal_12ga.png" 
            },
            magazine: "",
            magTypes: ["100", "200"],
            magPreview: {
              image: "/images/weapons/auk/vr80_mag.png"
            }
          }
        ]
      },
      {
        id: "bloody",
        name: "Bloody",
        kicker: "Серия",
        description: "Способ получения зависит от модели: крафт, коллекции или кейсы.",
        weapons: [
          {
            name: "SMG Bloody",
            image: "/images/weapons/bloody/bloody_smg.png",
            gallery: [
              "/images/weapons/bloody/bloody_smg.png",
              "/images/weapons/bloody/bloody_smg_camo1.png",
              "/images/weapons/bloody/bloody_smg_camo2.png"
            ],
            damage: "13500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Bloody",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "smg_bloody_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "AR15 Bloody V1",
            image: "/images/weapons/bloody/bloody_ar15.png",
            gallery: [
              "/images/weapons/bloody/bloody_ar15.png",
              "/images/weapons/bloody/bloody_ar15_camo1.png",
              "/images/weapons/bloody/bloody_ar15_camo2.png"
            ],
            damage: "19500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V1",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_ar15_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "AR15 Bloody V2",
            image: "/images/weapons/bloody/bloody_ar15.png",
            gallery: [
              "/images/weapons/bloody/bloody_ar15.png",
              "/images/weapons/bloody/bloody_ar15_camo1.png",
              "/images/weapons/bloody/bloody_ar15_camo2.png"
            ],
            damage: "24400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V2",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_ar15_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "Phantom AR-15 Bloody V1",
            image: "/images/weapons/bloody/bloody_phantom_ar15.png",
            gallery: [
              "/images/weapons/bloody/bloody_phantom_ar15.png",
              "/images/weapons/bloody/bloody_phantom_ar15_camo1.png",
              "/images/weapons/bloody/bloody_phantom_ar15_camo2.png"
            ],
            damage: "19500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V1",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_phantom_ar15_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "Phantom AR-15 Bloody V2",
            image: "/images/weapons/bloody/bloody_phantom_ar15.png",
            gallery: [
              "/images/weapons/bloody/bloody_phantom_ar15.png",
              "/images/weapons/bloody/bloody_phantom_ar15_camo1.png",
              "/images/weapons/bloody/bloody_phantom_ar15_camo2.png"
            ],
            damage: "24400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V2",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_phantom_ar15_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "DBR Bloody V1",
            image: "/images/weapons/bloody/bloody_dbr.png",
            gallery: [
              "/images/weapons/bloody/bloody_dbr.png",
              "/images/weapons/bloody/bloody_dbr_camo1.png",
              "/images/weapons/bloody/bloody_dbr_camo2.png"
            ],
            damage: "19500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V1",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_dbr_mag"
            },
            suppressors: [
              {
                label: "NATO",
                image: "/images/weapons/suppressor/supp_nato.png"
              },
              {
                label: "DBR",
                image: "/images/weapons/suppressor/supp_dbr.png"
              },
              {
                label: "Bloody",
                image: "/images/weapons/suppressor/supp_bloody.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "DBR Bloody V2",
            image: "/images/weapons/bloody/bloody_dbr.png",
            gallery: [
              "/images/weapons/bloody/bloody_dbr.png",
              "/images/weapons/bloody/bloody_dbr_camo1.png",
              "/images/weapons/bloody/bloody_dbr_camo2.png"
            ],
            damage: "24400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V2",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_dbr_mag"
            },
            suppressors: [
              {
                label: "NATO",
                image: "/images/weapons/suppressor/supp_nato.png"
              },
              {
                label: "DBR",
                image: "/images/weapons/suppressor/supp_dbr.png"
              },
              {
                label: "Bloody",
                image: "/images/weapons/suppressor/supp_bloody.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "SigSauer Bloody V1",
            image: "/images/weapons/bloody/bloody_sigsauer.png",
            gallery: [
              "/images/weapons/bloody/bloody_sigsauer.png",
              "/images/weapons/bloody/bloody_sigsauer_camo1.png",
              "/images/weapons/bloody/bloody_sigsauer_camo2.png"
            ],
            damage: "19500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V1",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_sigsauer_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "SigSauer Bloody V2",
            image: "/images/weapons/bloody/bloody_sigsauer.png",
            gallery: [
              "/images/weapons/bloody/bloody_sigsauer.png",
              "/images/weapons/bloody/bloody_sigsauer_camo1.png",
              "/images/weapons/bloody/bloody_sigsauer_camo2.png"
            ],
            damage: "24400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Bloody V2",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_sigsauer_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "SCAR Bloody",
            image: "/images/weapons/bloody/bloody_scar.png",
            gallery: [
              "/images/weapons/bloody/bloody_scar.png",
              "/images/weapons/bloody/bloody_scar_green.png",
              "/images/weapons/bloody/bloody_scar_white.png",
              "/images/weapons/bloody/bloody_scar_camo1.png"
            ],
            damage: "17500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56 Bloody",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_scar_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "PKP Bloody V1",
            image: "/images/weapons/bloody/bloody_pkp.png",
            gallery: [
              "/images/weapons/bloody/bloody_pkp.png",
              "/images/weapons/bloody/bloody_pkp_black.png",
              "/images/weapons/bloody/bloody_pkp_camo1.png",
              "/images/weapons/bloody/bloody_pkp_camo2.png"
            ],
            damage: "21000",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 Bloody V1",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "bloody_pkp_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "PKP Bloody V2",
            image: "/images/weapons/bloody/bloody_pkp.png",
            gallery: [
              "/images/weapons/bloody/bloody_pkp.png",
              "/images/weapons/bloody/bloody_pkp_black.png",
              "/images/weapons/bloody/bloody_pkp_camo1.png",
              "/images/weapons/bloody/bloody_pkp_camo2.png"
            ],
            damage: "26200",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 Bloody V2",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "bloody_pkp_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "RPD Bloody",
            image: "/images/weapons/bloody/bloody_rpd.png",
            gallery: [
              "/images/weapons/bloody/bloody_rpd.png",
              "/images/weapons/bloody/bloody_rpd_camo1.png",
              "/images/weapons/bloody/bloody_rpd_camo2.png",
              "/images/weapons/bloody/bloody_rpd_camo3.png"
            ],
            damage: "18900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Bloody",
              image: "/images/weapons/ammo/bloody_762x39.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "bloody_rpd_mag"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "LDR-308 Bloody V1",
            image: "/images/weapons/bloody/bloody_ldr.png",
            gallery: [
              "/images/weapons/bloody/bloody_ldr.png",
              "/images/weapons/bloody/bloody_ldr_camo1.png",
              "/images/weapons/bloody/bloody_ldr_camo2.png"
            ],
            damage: "37500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".308 Bloody V1",
              image: "/images/weapons/ammo/bloody_308.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_ldr_mag"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "LDR-308 Bloody V2",
            image: "/images/weapons/bloody/bloody_ldr.png",
            gallery: [
              "/images/weapons/bloody/bloody_ldr.png",
              "/images/weapons/bloody/bloody_ldr_camo1.png",
              "/images/weapons/bloody/bloody_ldr_camo2.png"
            ],
            damage: "46575",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".308 Bloody V2",
              image: "/images/weapons/ammo/bloody_308.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_ldr_mag"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "M14 Bloody",
            image: "/images/weapons/bloody/bloody_m14.png",
            gallery: [
              "/images/weapons/bloody/bloody_m14.png",
              "/images/weapons/bloody/bloody_m14_black.png",
              "/images/weapons/bloody/bloody_m14_white.png",
              "/images/weapons/bloody/bloody_m14_camo1.png"
            ],
            damage: "33750",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "7.62x51 Bloody",
              image: "/images/weapons/ammo/bloody_762x51.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              variantKey: "bloody_m14_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "CSR50 Bloody",
            image: "/images/weapons/bloody/bloody_csr50.png",
            gallery: [
              "/images/weapons/bloody/bloody_csr50.png"
            ],
            damage: "6500000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Стандартный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          }
        ]
      },
      {
        id: "crystal",
        name: "Crystal",
        kicker: "Серия",
        description: "Оружие, которое можно приобрести за кристаллы.",
        weapons: [
          {
            name: "AKM Gold V1",
            image: "/images/weapons/gold/gold_akm.png",
            gallery: [
              "/images/weapons/gold/gold_akm.png"
            ],
            colors: ["Стандарт"],
            damage: "3900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V3",
              image: "/images/weapons/ammo/dark_immortal_762x39.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_akm_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AKM Gold V2",
            image: "/images/weapons/gold/gold_akm.png",
            gallery: [
              "/images/weapons/gold/gold_akm.png"
            ],
            colors: ["Стандарт"],
            damage: "10400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V5",
              image: "/images/weapons/ammo/dark_immortal_762x39.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_akm_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AKM Gold V3",
            image: "/images/weapons/gold/gold_akm.png",
            gallery: [
              "/images/weapons/gold/gold_akm.png"
            ],
            colors: ["Стандарт"],
            damage: "17500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Gold",
              image: "/images/weapons/ammo/gold_762x39.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_akm_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "HK416 Gold V1",
            image: "/images/weapons/gold/gold_hk416.png",
            gallery: [
              "/images/weapons/gold/gold_hk416.png"
            ],
            colors: ["Стандарт"],
            damage: "3900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V3",
              image: "/images/weapons/ammo/dark_bloody_556x45.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_hk416_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "HK416 Gold V2",
            image: "/images/weapons/gold/gold_hk416.png",
            gallery: [
              "/images/weapons/gold/gold_hk416.png"
            ],
            colors: ["Стандарт"],
            damage: "10400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V5",
              image: "/images/weapons/ammo/dark_bloody_556x45.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_hk416_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "HK416 Gold V3",
            image: "/images/weapons/gold/gold_hk416.png",
            gallery: [
              "/images/weapons/gold/gold_hk416.png"
            ],
            colors: ["Стандарт"],
            damage: "17500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Gold",
              image: "/images/weapons/ammo/gold_556x45.png"
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              image: "/images/weapons/gold/gold_hk416_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          }
        ]
      },
      {
        id: "dark",
        name: "Dark",
        kicker: "Серия",
        description: "Оружие, которое можно получить игровым путём или создать с помощью крафта.",
        weapons: [
          {
            name: "Kriss Vector Dark",
            image: "/images/weapons/dark/dark_pp_v1.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v1.png"
            ],
            damage: "500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V1",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["30", "60", "90", "150"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v1_mag.png"
            },
            suppressors: [
              {
                label: "Kriss Vector",
                image: "/images/weapons/suppressor/supp_kriss.png"
              },
            ]
          },
          {
            name: "M192A1 Dark",
            image: "/images/weapons/dark/dark_pp_v2.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v2.png"
            ],
            damage: "1500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V2",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["30", "60", "90", "150"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v2_mag.png"
            },
            suppressors: [
              {
                label: "Пистолетный",
                image: "/images/weapons/suppressor/supp_pistol_black.png",
                gallery: [
                  "/images/weapons/suppressor/supp_pistol_black.png",
                  "/images/weapons/suppressor/supp_pistol_white.png",
                  "/images/weapons/suppressor/supp_pistol_camo1.png",
                  "/images/weapons/suppressor/supp_pistol_camo2.png",
                  "/images/weapons/suppressor/supp_pistol_camo3.png",
                  "/images/weapons/suppressor/supp_pistol_camo4.png",
                  "/images/weapons/suppressor/supp_pistol_camo5.png",
                  "/images/weapons/suppressor/supp_pistol_camo6.png",
                  "/images/weapons/suppressor/supp_pistol_camo7.png"
                ]
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "PPSH Dark",
            image: "/images/weapons/dark/dark_pp_v3.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v3.png"
            ],
            damage: "3000",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V3",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v3_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "Scorpion Dark",
            image: "/images/weapons/dark/dark_pp_v4.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v4.png"
            ],
            damage: "5000",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V4",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v4_mag.png"
            },
            suppressors: [
              {
                label: "Пистолетный",
                image: "/images/weapons/suppressor/supp_pistol_black.png",
                gallery: [
                  "/images/weapons/suppressor/supp_pistol_black.png",
                  "/images/weapons/suppressor/supp_pistol_white.png",
                  "/images/weapons/suppressor/supp_pistol_camo1.png",
                  "/images/weapons/suppressor/supp_pistol_camo2.png",
                  "/images/weapons/suppressor/supp_pistol_camo3.png",
                  "/images/weapons/suppressor/supp_pistol_camo4.png",
                  "/images/weapons/suppressor/supp_pistol_camo5.png",
                  "/images/weapons/suppressor/supp_pistol_camo6.png",
                  "/images/weapons/suppressor/supp_pistol_camo7.png"
                ]
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "SUB2000 Dark",
            image: "/images/weapons/dark/dark_pp_v5.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v5.png"
            ],
            damage: "8000",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V5",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "200", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v5_v6_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "SUB2000-S Dark",
            image: "/images/weapons/dark/dark_pp_v6.png",
            gallery: [
              "/images/weapons/dark/dark_pp_v6.png"
            ],
            damage: "12000",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP V6",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "200", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_pp_v5_v6_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "MBR Dark",
            image: "/images/weapons/dark/dark_ar556_v1.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v1.png"
            ],
            damage: "650",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V1",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v1_v2_v5_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "TAR21 Dark",
            image: "/images/weapons/dark/dark_ar556_v2.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v2.png"
            ],
            damage: "1900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V2",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v1_v2_v5_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "AR15 Dark",
            image: "/images/weapons/dark/dark_ar556_v3.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v3.png"
            ],
            damage: "3900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V3",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "250"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v3_v4_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "MCR Dark",
            image: "/images/weapons/dark/dark_ar556_v4.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v4.png"
            ],
            damage: "6500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V4",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "250"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v3_v4_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "HK417 Dark",
            image: "/images/weapons/dark/dark_ar556_v5.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v5.png"
            ],
            damage: "10400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V5",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v1_v2_v5_mag.png"
            },
            suppressors: [
              {
                label: "Винтовочный 2",
                image: "/images/weapons/suppressor/supp_rifle.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "SCAR Dark",
            image: "/images/weapons/dark/dark_ar556_v6.png",
            gallery: [
              "/images/weapons/dark/dark_ar556_v6.png"
            ],
            damage: "15400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 V6",
              image: "/images/weapons/ammo/dark_bloody_556x45.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar556_v6_mag.png"
            },
            suppressors: [
              {
                label: "Винтовочный 2",
                image: "/images/weapons/suppressor/supp_rifle.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "VSK94 Dark",
            image: "/images/weapons/dark/dark_ar762_v1.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v1.png"
            ],
            damage: "650",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V1",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v1_mag.png"
            },
            suppressors: [
              {
                label: "VSK",
                image: "/images/weapons/suppressor/supp_vsk.png"
              }
            ]
          },
          {
            name: "AK-12 Dark",
            image: "/images/weapons/dark/dark_ar762_v2.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v2.png"
            ],
            damage: "1900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V2",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v2_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "AK47 Dark",
            image: "/images/weapons/dark/dark_ar762_v3.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v3.png"
            ],
            damage: "3900",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V3",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v3_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AKALPHA Dark",
            image: "/images/weapons/dark/dark_ar762_v4.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v4.png"
            ],
            damage: "6500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V4",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v4_v5_v6_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AK15 Dark",
            image: "/images/weapons/dark/dark_ar762_v5.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v5.png"
            ],
            damage: "10400",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V5",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v4_v5_v6_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AEK971 Dark",
            image: "/images/weapons/dark/dark_ar762_v6.png",
            gallery: [
              "/images/weapons/dark/dark_ar762_v6.png"
            ],
            damage: "16500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 V6",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_ar762_v4_v5_v6_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "PKM Dark",
            image: "/images/weapons/dark/dark_hmg_v1.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v1.png"
            ],
            damage: "700",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V1",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v1_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "M249 Dark",
            image: "/images/weapons/dark/dark_hmg_v2.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v2.png"
            ],
            damage: "2100",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V2",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v2_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "PKP Dark",
            image: "/images/weapons/dark/dark_hmg_v3.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v3.png"
            ],
            damage: "4200",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V3",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300", "400"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v3_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "M60E3 Dark",
            image: "/images/weapons/dark/dark_hmg_v4.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v4.png"
            ],
            damage: "7000",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V4",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["200", "300", "400", "500"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v4_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "HK21 Dark",
            image: "/images/weapons/dark/dark_hmg_v5.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v5.png"
            ],
            damage: "11200",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V5",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["200", "300", "400", "500"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v5_mag.png"
            },
            suppressors: [
              {
                label: "Винтовочный 2",
                image: "/images/weapons/suppressor/supp_nato.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "Evolys Dark",
            image: "/images/weapons/dark/dark_hmg_v6.png",
            gallery: [
              "/images/weapons/dark/dark_hmg_v6.png"
            ],
            damage: "16800",
            fireModes: "Автомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 V6",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["200", "300", "400", "500"],
            magPreview: {
              image: "/images/weapons/dark/dark_hmg_v6_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AS50 Dark",
            image: "/images/weapons/dark/dark_rifle_v1.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v1.png"
            ],
            damage: "1200",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V1",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v1_mag.png"
            },
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "Kivaari Dark",
            image: "/images/weapons/dark/dark_rifle_v2.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v2.png"
            ],
            damage: "3700",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V2",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["50", "100", "150", "200"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v2_mag.png"
            },
            suppressors: [
              {
                label: "Винтовочный 1",
                image: "/images/weapons/suppressor/supp_awm.png"
              }
            ]
          },
          {
            name: "M110 Dark",
            image: "/images/weapons/dark/dark_rifle_v3.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v3.png"
            ],
            damage: "7500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V3",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "250"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v3_mag.png"
            },
            suppressors: [
              {
                label: "Винтовочный 2",
                image: "/images/weapons/suppressor/supp_rifle.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "RSASS Dark",
            image: "/images/weapons/dark/dark_rifle_v4.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v4.png"
            ],
            damage: "12500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V4",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["100", "150", "200", "250"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v4_mag.png"
            },
            suppressors: [
              {
                label: "NATO",
                image: "/images/weapons/suppressor/supp_nato.png"
              },
              {
                label: "Винтовочный 2",
                image: "/images/weapons/suppressor/supp_rifle.png"
              },
              {
                label: "Самодельный",
                image: "/images/weapons/suppressor/supp_improv.png"
              },
              {
                label: "Immortal 1",
                image: "/images/weapons/suppressor/supp_immortal_1.png"
              },
              {
                label: "Immortal 2",
                image: "/images/weapons/suppressor/supp_immortal_2.png"
              },
              {
                label: "Immortal 3",
                image: "/images/weapons/suppressor/supp_immortal_3.png"
              },
              {
                label: "Immortal 4",
                image: "/images/weapons/suppressor/supp_immortal_4.png"
              },
              {
                label: "Immortal 5",
                image: "/images/weapons/suppressor/supp_immortal_5.png"
              },
              {
                label: "Immortal 6",
                image: "/images/weapons/suppressor/supp_immortal_6.png"
              },
              {
                label: "Immortal 7",
                image: "/images/weapons/suppressor/supp_immortal_7.png"
              },
              {
                label: "Immortal 8",
                image: "/images/weapons/suppressor/supp_immortal_8.png"
              }
            ]
          },
          {
            name: "VSSK Dark",
            image: "/images/weapons/dark/dark_rifle_v5.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v5.png"
            ],
            damage: "20000",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V5",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["150", "200", "250", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v5_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "M82A2 Dark",
            image: "/images/weapons/dark/dark_rifle_v6.png",
            gallery: [
              "/images/weapons/dark/dark_rifle_v6.png"
            ],
            damage: "30000",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: "12.7x108 V6",
              image: "/images/weapons/ammo/dark_127x108.png" 
            },
            magazine: "",
            magTypes: ["150", "200", "250", "300"],
            magPreview: {
              image: "/images/weapons/dark/dark_rifle_v6_mag.png"
            },
            suppressors: [
              {
                label: "M82A2",
                image: "/images/weapons/suppressor/supp_m82a2.png"
              },
            ]
          }
        ]
      },
      {
        id: "immortal",
        name: "Immortal",
        kicker: "Серия",
        description: "Оружие за пожертвование.",
        weapons: [
          {
            name: "KG-19 Immortal",
            image: "/images/weapons/immortal/gun_kg19.png",
            gallery: [
              "/images/weapons/immortal/gun_kg19.png",
              "/images/weapons/immortal/gun_kg19_white.png",
              "/images/weapons/immortal/gun_kg19_camo1.png",
              "/images/weapons/immortal/gun_kg19_camo2.png",
              "/images/weapons/immortal/gun_kg19_camo3.png",
              "/images/weapons/immortal/gun_kg19_camo4.png",
              "/images/weapons/immortal/gun_kg19_camo5.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "600",
            ammo: {
              label: "9mm Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              variantKey: "kg19_mag"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "PL-14 Immortal",
            image: "/images/weapons/immortal/gun_pl14.png",
            gallery: [
              "/images/weapons/immortal/gun_pl14.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "600",
            ammo: {
              label: "9mm Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              image: "/images/weapons/immortal/pl14_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "RZ X-08 Immortal",
            image: "/images/weapons/immortal/gun_rzx.png",
            gallery: [
              "/images/weapons/immortal/gun_rzx.png",
              "/images/weapons/immortal/gun_rzx_black.png",
              "/images/weapons/immortal/gun_rzx_white.png",
              "/images/weapons/immortal/gun_rzx_camo1.png",
              "/images/weapons/immortal/gun_rzx_camo2.png",
              "/images/weapons/immortal/gun_rzx_camo3.png",
              "/images/weapons/immortal/gun_rzx_camo4.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "600",
            ammo: {
              label: "9mm Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              image: "/images/weapons/immortal/rzx08_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "Stechkin APS Immortal",
            image: "/images/weapons/immortal/gun_stechkin.png",
            gallery: [
              "/images/weapons/immortal/gun_stechkin.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "600",
            ammo: {
              label: "9x18 Immortal",
              image: "/images/weapons/ammo/immortal_9x18.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              image: "/images/weapons/immortal/stechkin_mag.png"
            },
            suppressors: [
              {
                label: "Stechkin",
                image: "/images/weapons/suppressor/supp_stechkin.png"
              }
            ]
          },
          {
            name: "ACP9K Immortal",
            image: "/images/weapons/immortal/gun_acp9.png",
            gallery: [
              "/images/weapons/immortal/gun_acp9.png",
              "/images/weapons/immortal/gun_acp9_white.png",
              "/images/weapons/immortal/gun_acp9_camo1.png",
              "/images/weapons/immortal/gun_acp9_camo2.png",
              "/images/weapons/immortal/gun_acp9_camo3.png",
              "/images/weapons/immortal/gun_acp9_camo4.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              image: "/images/weapons/immortal/acp9_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Honey Badger Immortal",
            image: "/images/weapons/immortal/gun_hb_i.png",
            gallery: [
              "/images/weapons/immortal/gun_hb_i.png",
              "/images/weapons/immortal/gun_hb_i_beige.png",
              "/images/weapons/immortal/gun_hb_i_white.png",
              "/images/weapons/immortal/gun_hb_i_camo1.png",
              "/images/weapons/immortal/gun_hb_i_camo2.png",
              "/images/weapons/immortal/gun_hb_i_camo3.png",
              "/images/weapons/immortal/gun_hb_i_camo4.png",
              "/images/weapons/immortal/gun_hb_i_camo5.png",
              "/images/weapons/immortal/gun_hb_i_camo6.png",
              "/images/weapons/immortal/gun_hb_i_camo7.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".300 Blackout Immortal",
              image: "/images/weapons/ammo/immortal_300blk.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              image: "/images/weapons/immortal/honeybadger_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Kriss Vector Immortal",
            image: "/images/weapons/immortal/gun_kriss.png",
            gallery: [
              "/images/weapons/immortal/gun_kriss.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".45 ACP Immortal",
              image: "/images/weapons/ammo/dark_immortal_45acp.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              image: "/images/weapons/immortal/kriss_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Пистолет Пулемет Immortal V2",
            image: "/images/weapons/immortal/gun_smg_black.png",
            gallery: [
              "/images/weapons/immortal/gun_smg_black.png",
              "/images/weapons/immortal/gun_smg_blue.png",
              "/images/weapons/immortal/gun_smg_grey.png",
              "/images/weapons/immortal/gun_smg_lightblue.png",
              "/images/weapons/immortal/gun_smg_orange.png",
              "/images/weapons/immortal/gun_smg_pink.png",
              "/images/weapons/immortal/gun_smg_red.png",
              "/images/weapons/immortal/gun_smg_white.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "RR919 Immortal",
              image: "/images/weapons/ammo/immortal_rr919v1.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              image: "/images/weapons/immortal/smg_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "Saiga-9 Immortal",
            image: "/images/weapons/immortal/gun_saiga.png",
            gallery: [
              "/images/weapons/immortal/gun_saiga.png",
              "/images/weapons/immortal/gun_saiga_black.png",
              "/images/weapons/immortal/gun_saiga_white.png",
              "/images/weapons/immortal/gun_saiga_camo1.png",
              "/images/weapons/immortal/gun_saiga_camo2.png",
              "/images/weapons/immortal/gun_saiga_camo3.png",
              "/images/weapons/immortal/gun_saiga_camo4.png",
              "/images/weapons/immortal/gun_saiga_camo5.png",
              "/images/weapons/immortal/gun_saiga_camo6.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "saiga9_mag"
            },
            suppressors: suppressorPreset("saiga9Immortal")
          },
          {
            name: "Vityaz Immortal",
            image: "/images/weapons/immortal/gun_vityaz.png",
            gallery: [
              "/images/weapons/immortal/gun_vityaz.png",
              "/images/weapons/immortal/gun_vityaz_white.png",
              "/images/weapons/immortal/gun_vityaz_camo1.png",
              "/images/weapons/immortal/gun_vityaz_camo2.png",
              "/images/weapons/immortal/gun_vityaz_camo3.png",
              "/images/weapons/immortal/gun_vityaz_camo4.png"
            ],
            damage: "23500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Immortal",
              image: "/images/weapons/ammo/immortal_9x19.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "vityaz_mag"
            },
            suppressors: [
              {
                label: "Vityaz",
                image: "/images/weapons/suppressor/supp_vityaz.png",
                gallery: [
                  "/images/weapons/suppressor/supp_vityaz.png",
                  "/images/weapons/suppressor/supp_vityaz_white.png",
                  "/images/weapons/suppressor/supp_vityaz_camo1.png",
                  "/images/weapons/suppressor/supp_vityaz_camo2.png",
                  "/images/weapons/suppressor/supp_vityaz_camo3.png",
                  "/images/weapons/suppressor/supp_vityaz_camo4.png"
                ]
              }
            ]
          },
          {
            name: "AK-74M Immortal",
            image: "/images/weapons/immortal/gun_ak74m.png",
            gallery: [
              "/images/weapons/immortal/gun_ak74m.png",
              "/images/weapons/immortal/gun_ak74m_black.png",
              "/images/weapons/immortal/gun_ak74m_white.png",
              "/images/weapons/immortal/gun_ak74m_camo1.png",
              "/images/weapons/immortal/gun_ak74m_camo2.png",
              "/images/weapons/immortal/gun_ak74m_camo3.png",
              "/images/weapons/immortal/gun_ak74m_camo4.png",
              "/images/weapons/immortal/gun_ak74m_camo5.png",
              "/images/weapons/immortal/gun_ak74m_camo6.png",
              "/images/weapons/immortal/gun_ak74m_camo7.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.45x39 Immortal",
              image: "/images/weapons/ammo/immortal_545x39.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "ak74m_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "Galil Ace Immortal",
            image: "/images/weapons/immortal/gun_galil_black.png",
            gallery: [
              "/images/weapons/immortal/gun_galil_black.png",
              "/images/weapons/immortal/gun_galil_beige.png",
              "/images/weapons/immortal/gun_galil_green.png",
              "/images/weapons/immortal/gun_galil_white.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Immortal",
              image: "/images/weapons/ammo/dark_immortal_762x39.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "galil_mag"
            },
            suppressors: suppressorPreset("galilImmortal")
          },
          {
            name: "Автомат Immortal V1",
            image: "/images/weapons/immortal/gun_ar_1_black.png",
            gallery: [
              "/images/weapons/immortal/gun_ar_1_black.png",
              "/images/weapons/immortal/gun_ar_1_blue.png",
              "/images/weapons/immortal/gun_ar_1_grey.png",
              "/images/weapons/immortal/gun_ar_1_lightblue.png",
              "/images/weapons/immortal/gun_ar_1_orange.png",
              "/images/weapons/immortal/gun_ar_1_pink.png",
              "/images/weapons/immortal/gun_ar_1_red.png",
              "/images/weapons/immortal/gun_ar_1_white.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "RR556 Immortal V1",
              image: "/images/weapons/ammo/immortal_rr556v1.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              image: "/images/weapons/immortal/ar1_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "Автомат Immortal V2",
            image: "/images/weapons/immortal/gun_ar_2_black.png",
            gallery: [
              "/images/weapons/immortal/gun_ar_2_black.png",
              "/images/weapons/immortal/gun_ar_2_blue.png",
              "/images/weapons/immortal/gun_ar_2_grey.png",
              "/images/weapons/immortal/gun_ar_2_lightblue.png",
              "/images/weapons/immortal/gun_ar_2_orange.png",
              "/images/weapons/immortal/gun_ar_2_pink.png",
              "/images/weapons/immortal/gun_ar_2_red.png",
              "/images/weapons/immortal/gun_ar_2_white.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "RR556 Immortal V2",
              image: "/images/weapons/ammo/immortal_rr556v2.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              image: "/images/weapons/immortal/ar2_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "ASVAL A Immortal",
            image: "/images/weapons/immortal/gun_asval_a.png",
            gallery: [
              "/images/weapons/immortal/gun_asval_a.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "AS939 Immortal",
              image: "/images/weapons/ammo/immortal_as939.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              image: "/images/weapons/immortal/asval_a_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "ASVAL B Immortal",
            image: "/images/weapons/immortal/gun_asval_b.png",
            gallery: [
              "/images/weapons/immortal/gun_asval_b.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "AS939 Immortal",
              image: "/images/weapons/ammo/immortal_as939.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              image: "/images/weapons/immortal/asval_b_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "L129A1 Immortal",
            image: "/images/weapons/immortal/gun_l129a1.png",
            gallery: [
              "/images/weapons/immortal/gun_l129a1.png",
              "/images/weapons/immortal/gun_l129a1_white.png",
              "/images/weapons/immortal/gun_l129a1_camo1.png",
              "/images/weapons/immortal/gun_l129a1_camo2.png",
              "/images/weapons/immortal/gun_l129a1_camo3.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Immortal",
              image: "/images/weapons/ammo/immortal_556x45.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "l129a1_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "MDR Immortal",
            image: "/images/weapons/immortal/gun_mdr.png",
            gallery: [
              "/images/weapons/immortal/gun_mdr.png",
              "/images/weapons/immortal/gun_mdr_beige.png",
              "/images/weapons/immortal/gun_mdr_white.png",
              "/images/weapons/immortal/gun_mdr_camo1.png",
              "/images/weapons/immortal/gun_mdr_camo2.png",
              "/images/weapons/immortal/gun_mdr_camo3.png",
              "/images/weapons/immortal/gun_mdr_camo4.png",
              "/images/weapons/immortal/gun_mdr_camo5.png",
              "/images/weapons/immortal/gun_mdr_camo6.png",
              "/images/weapons/immortal/gun_mdr_camo7.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 Immortal",
              image: "/images/weapons/ammo/immortal_556x45.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              image: "/images/weapons/immortal/mdr_mag.png" 
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "VSSK Immortal",
            image: "/images/weapons/immortal/gun_vssk.png",
            gallery: [
              "/images/weapons/immortal/gun_vssk_black.png",
              "/images/weapons/immortal/gun_vssk_white.png",
              "/images/weapons/immortal/gun_vssk_camo1.png",
              "/images/weapons/immortal/gun_vssk_camo2.png",
              "/images/weapons/immortal/gun_vssk_camo3.png",
              "/images/weapons/immortal/gun_vssk_camo4.png",
              "/images/weapons/immortal/gun_vssk_camo5.png"
            ],
            damage: "30500",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "12.7x55 Immortal",
              image: "/images/weapons/ammo/immortal_127x55.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "vssk_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "HK-121 Immortal",
            image: "/images/weapons/immortal/gun_hk121.png",
            gallery: [
              "/images/weapons/immortal/gun_hk121.png",
              "/images/weapons/immortal/gun_hk121_white.png",
              "/images/weapons/immortal/gun_hk121_camo1.png",
              "/images/weapons/immortal/gun_hk121_camo2.png",
              "/images/weapons/immortal/gun_hk121_camo3.png"
            ],
            damage: "32800",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x51 Immortal",
              image: "/images/weapons/ammo/immortal_762x51.png" 
            },
            magazine: "",
            magTypes: ["400", "700", "1000"],
            magPreview: {
              variantKey: "hk121_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "Пулемет Immortal V2",
            image: "/images/weapons/immortal/gun_hmg_black.png",
            gallery: [
              "/images/weapons/immortal/gun_hmg_black.png",
              "/images/weapons/immortal/gun_hmg_blue.png",
              "/images/weapons/immortal/gun_hmg_grey.png",
              "/images/weapons/immortal/gun_hmg_lightblue.png",
              "/images/weapons/immortal/gun_hmg_orange.png",
              "/images/weapons/immortal/gun_hmg_pink.png",
              "/images/weapons/immortal/gun_hmg_red.png",
              "/images/weapons/immortal/gun_hmg_white.png"
            ],
            damage: "32800",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "RR762V2 Immortal",
              image: "/images/weapons/ammo/immortal_rr762v2.png" 
            },
            magazine: "",
            magTypes: ["400", "700", "1000"],
            magPreview: {
              image: "/images/weapons/immortal/hmg_mag.png" 
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "PKP Immortal",
            image: "/images/weapons/immortal/gun_hk121.png",
            gallery: [
              "/images/weapons/immortal/gun_pkp.png",
              "/images/weapons/immortal/gun_pkp_white.png",
              "/images/weapons/immortal/gun_pkp_camo1.png",
              "/images/weapons/immortal/gun_pkp_camo2.png",
              "/images/weapons/immortal/gun_pkp_camo3.png",
              "/images/weapons/immortal/gun_pkp_camo4.png",
              "/images/weapons/immortal/gun_pkp_camo5.png"
            ],
            damage: "32800",
            fireModes: "Автомат / полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 Immortal",
              image: "/images/weapons/ammo/dark_bloody_immortal_762x54.png" 
            },
            magazine: "",
            magTypes: ["400", "700", "1000"],
            magPreview: {
              variantKey: "pkp_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "AS50 Immortal",
            image: "/images/weapons/immortal/gun_as50_black.png",
            gallery: [
              "/images/weapons/immortal/gun_as50_black.png",
              "/images/weapons/immortal/gun_as50_beige.png",
              "/images/weapons/immortal/gun_as50_green.png",
              "/images/weapons/immortal/gun_as50_white.png"
            ],
            damage: "58700",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".50 BMG Immortal",
              image: "/images/weapons/ammo/immortal_50bmg.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "as50_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "MSR Immortal",
            image: "/images/weapons/immortal/gun_msr.png",
            gallery: [
              "/images/weapons/immortal/gun_msr.png",
              "/images/weapons/immortal/gun_msr_black.png",
              "/images/weapons/immortal/gun_msr_white.png",
              "/images/weapons/immortal/gun_msr_camo1.png",
              "/images/weapons/immortal/gun_msr_camo2.png",
              "/images/weapons/immortal/gun_msr_camo3.png",
              "/images/weapons/immortal/gun_msr_camo4.png",
              "/images/weapons/immortal/gun_msr_camo5.png",
              "/images/weapons/immortal/gun_msr_camo6.png",
              "/images/weapons/immortal/gun_msr_camo7.png"
            ],
            damage: "58700",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".50 BMG Immortal V2",
              image: "/images/weapons/ammo/immortal_50bmg_v2.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "msr_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "XM109 Immortal",
            image: "/images/weapons/immortal/gun_xm109.png",
            gallery: [
              "/images/weapons/immortal/gun_xm109.png",
              "/images/weapons/immortal/gun_xm109_spider.png",
              "/images/weapons/immortal/gun_xm109_white.png",
              "/images/weapons/immortal/gun_xm109_camo.png",
              "/images/weapons/immortal/gun_xm109_camo2.png",
              "/images/weapons/immortal/gun_xm109_camo3.png",
              "/images/weapons/immortal/gun_xm109_camo4.png",
              "/images/weapons/immortal/gun_xm109_camo5.png"
            ],
            damage: "58700",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".50 BMG Immortal V2",
              image: "/images/weapons/ammo/immortal_50bmg_v2.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "xm109_mag"
            },
            suppressors: [
              {
                label: "XM109",
                image: "/images/weapons/suppressor/supp_xm109.png",
                gallery: [
                  "/images/weapons/suppressor/supp_xm109.png",
                  "/images/weapons/suppressor/supp_xm109_spider.png",
                  "/images/weapons/suppressor/supp_xm109_white.png",
                  "/images/weapons/suppressor/supp_xm109_camo1.png",
                  "/images/weapons/suppressor/supp_xm109_camo2.png",
                  "/images/weapons/suppressor/supp_xm109_camo3.png",
                  "/images/weapons/suppressor/supp_xm109_camo4.png",
                  "/images/weapons/suppressor/supp_xm109_camo5.png"
                ]
              }
            ]
          },
          {
            name: "AR50A1 Immortal",
            image: "/images/weapons/immortal/gun_ar50a1.png",
            gallery: [
              "/images/weapons/immortal/gun_ar50a1.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "BFG-50 Immortal",
            image: "/images/weapons/immortal/gun_bfg50_black.png",
            gallery: [
              "/images/weapons/immortal/gun_bfg50_black.png",
              "/images/weapons/immortal/gun_bfg50_white.png",
              "/images/weapons/immortal/gun_bfg50_camo1.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "NWT Immortal",
            image: "/images/weapons/immortal/gun_nwt.png",
            gallery: [
              "/images/weapons/immortal/gun_nwt.png",
              "/images/weapons/immortal/gun_nwt_camo.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "Orsis T-5000 Immortal",
            image: "/images/weapons/immortal/gun_orsis.png",
            gallery: [
              "/images/weapons/immortal/gun_orsis.png",
              "/images/weapons/immortal/gun_orsis_camo.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          },
          {
            name: "Карабин 98К.",
            image: "/images/weapons/immortal/gun_k98.png",
            gallery: [
              "/images/weapons/immortal/gun_k98.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "7.92x57",
              image: "/images/weapons/ammo/ammo_792x57.png" 
            },
            hasMagazine: false,
            magazine: "",
            magTypes: [],
            magPreview: {},
            hasSuppressors: false,
            suppressors: []
          },
        ]
      },
      {
        id: "ny",
        name: "NY Tactical",
        kicker: "Серия",
        description: "Оружие из боевого пропуска.",
        weapons: [
          {
            name: "Desert Eagle NY Tactical",
            image: "/images/weapons/ny/gun_de.png",
            gallery: [
              "/images/weapons/ny/gun_de.png"
            ],
            damage: "26000",
            fireModes: "Полуавтомат",
            fireRate: "900",
            ammo: {
              label: ".50 AE NY Tactical",
              image: "/images/weapons/ammo/ny_50ae.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              image: "/images/weapons/ny/ny_deagle_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "BT-9 NY Tactical",
            image: "/images/weapons/ny/gun_bt9.png",
            gallery: [
              "/images/weapons/ny/gun_bt9.png"
            ],
            damage: "23500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 NY Tactical",
              image: "/images/weapons/ammo/ny_9x19.png" 
            },
            magazine: "",
            magTypes: ["200", "400"],
            magPreview: {
              image: "/images/weapons/ny/ny_bt9_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "STM-545 NY Tactical",
            image: "/images/weapons/ny/gun_stm545.png",
            gallery: [
              "/images/weapons/ny/gun_stm545.png"
            ],
            damage: "30500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "5.56x45 NY Tactical",
              image: "/images/weapons/ammo/ny_556x45.png" 
            },
            magazine: "",
            magTypes: ["300", "500"],
            magPreview: {
              image: "/images/weapons/ny/ny_stm545_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "M249 NY Tactical",
            image: "/images/weapons/ny/gun_m249.png",
            gallery: [
              "/images/weapons/ny/gun_m249.png"
            ],
            damage: "32800",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x51 NY Tactical",
              image: "/images/weapons/ammo/ny_762x51.png" 
            },
            magazine: "",
            magTypes: ["400", "700"],
            magPreview: {
              image: "/images/weapons/ny/ny_m249_mag.png"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "DMR M800 NY Tactical",
            image: "/images/weapons/ny/gun_dmr.png",
            gallery: [
              "/images/weapons/ny/gun_dmr.png"
            ],
            damage: "58750",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".300 NY Tactical",
              image: "/images/weapons/ammo/ny_300blk.png" 
            },
            magazine: "",
            magTypes: ["200", "400"],
            magPreview: {
              image: "/images/weapons/ny/ny_dmr_m800_mag.png"
            },
            suppressors: suppressorPreset("natoImmortal")
          }
        ]
      },
      {
        id: "phantom",
        name: "Phantom",
        kicker: "Серия",
        description: "Оружие за пожертвование.",
        weapons: [
          {
            name: "Ruger Hybrid Phantom",
            image: "/images/weapons/phantom/gun_ruger.png",
            gallery: [
              "/images/weapons/phantom/gun_ruger.png",
              "/images/weapons/phantom/gun_ruger_white.png",
              "/images/weapons/phantom/gun_ruger_camo1.png",
              "/images/weapons/phantom/gun_ruger_camo2.png",
              "/images/weapons/phantom/gun_ruger_camo3.png"
            ],
            damage: "27100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9mm Phantom",
              image: "/images/weapons/ammo/phantom_9mm.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              image: "/images/weapons/phantom/ruger_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "Hammerhead Phantom",
            image: "/images/weapons/phantom/gun_hammerhead.png",
            gallery: [
              "/images/weapons/phantom/gun_hammerhead.png",
              "/images/weapons/phantom/gun_hammerhead_white.png",
              "/images/weapons/phantom/gun_hammerhead_camo1.png",
              "/images/weapons/phantom/gun_hammerhead_camo2.png",
              "/images/weapons/phantom/gun_hammerhead_camo3.png"
            ],
            damage: "27100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9mm Phantom",
              image: "/images/weapons/ammo/phantom_9mm.png" 
            },
            magazine: "",
            magTypes: ["150"],
            magPreview: {
              variantKey: "hammerhead_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Honey Badger Phantom",
            image: "/images/weapons/phantom/gun_hb_p.png",
            gallery: [
              "/images/weapons/phantom/gun_hb_p.png",
              "/images/weapons/phantom/gun_hb_p_white.png",
              "/images/weapons/phantom/gun_hb_p_camo1.png",
              "/images/weapons/phantom/gun_hb_p_camo2.png",
              "/images/weapons/phantom/gun_hb_p_camo3.png"
            ],
            damage: "27100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "300 Blackout Phantom",
              image: "/images/weapons/ammo/phantom_300blk.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "honey_phantom_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "SR-2 Veresk Phantom",
            image: "/images/weapons/phantom/gun_veresk.png",
            gallery: [
              "/images/weapons/phantom/gun_veresk.png",
              "/images/weapons/phantom/gun_veresk_white.png",
              "/images/weapons/phantom/gun_veresk_camo1.png",
              "/images/weapons/phantom/gun_veresk_camo2.png",
              "/images/weapons/phantom/gun_veresk_camo3.png"
            ],
            damage: "27100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Phantom",
              image: "/images/weapons/ammo/phantom_9x19.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              image: "/images/weapons/phantom/veresk_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "ASH-12 Phantom",
            image: "/images/weapons/phantom/gun_ash12.png",
            gallery: [
              "/images/weapons/phantom/gun_ash12.png",
              "/images/weapons/phantom/gun_ash12_white.png",
              "/images/weapons/phantom/gun_ash12_camo1.png",
              "/images/weapons/phantom/gun_ash12_camo2.png",
              "/images/weapons/phantom/gun_ash12_camo3.png"
            ],
            damage: "35100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "12.7x55 Phantom",
              image: "/images/weapons/ammo/phantom_127x55.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "ash_phantom_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "MCX Spear Phantom",
            image: "/images/weapons/phantom/gun_mcx.png",
            gallery: [
              "/images/weapons/phantom/gun_mcx.png",
              "/images/weapons/phantom/gun_mcx_white.png",
              "/images/weapons/phantom/gun_mcx_camo1.png",
              "/images/weapons/phantom/gun_mcx_camo2.png",
              "/images/weapons/phantom/gun_mcx_camo3.png"
            ],
            damage: "35100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x51 Phantom",
              image: "/images/weapons/ammo/phantom_762x51.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "mcx_phantom_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Velociraptor Phantom",
            image: "/images/weapons/phantom/gun_velociraptor.png",
            gallery: [
              "/images/weapons/phantom/gun_velociraptor.png",
              "/images/weapons/phantom/gun_velociraptor_white.png",
              "/images/weapons/phantom/gun_velociraptor_camo1.png",
              "/images/weapons/phantom/gun_velociraptor_camo2.png",
              "/images/weapons/phantom/gun_velociraptor_camo3.png"
            ],
            damage: "35100",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Phantom",
              image: "/images/weapons/ammo/phantom_762x39.png" 
            },
            magazine: "",
            magTypes: ["300", "500", "700"],
            magPreview: {
              variantKey: "velociraptor_phantom_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Origin-12 Phantom",
            image: "/images/weapons/phantom/gun_origin.png",
            gallery: [
              "/images/weapons/phantom/gun_origin.png",
              "/images/weapons/phantom/gun_origin_white.png",
              "/images/weapons/phantom/gun_origin_camo1.png",
              "/images/weapons/phantom/gun_origin_camo2.png",
              "/images/weapons/phantom/gun_origin_camo3.png"
            ],
            damage: "101355",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "300",
            ammo: {
              label: "12x70 Phantom",
              image: "/images/weapons/ammo/phantom_12ga.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              variantKey: "origin_phantom_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "Saiga-12 Phantom",
            image: "/images/weapons/phantom/gun_saiga.png",
            gallery: [
              "/images/weapons/phantom/gun_saiga.png",
              "/images/weapons/phantom/gun_saiga_white.png",
              "/images/weapons/phantom/gun_saiga_camo1.png",
              "/images/weapons/phantom/gun_saiga_camo2.png",
              "/images/weapons/phantom/gun_saiga_camo3.png"
            ],
            damage: "101355",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "300",
            ammo: {
              label: "12x70 Phantom",
              image: "/images/weapons/ammo/phantom_12ga.png" 
            },
            magazine: "",
            magTypes: ["100", "200", "300"],
            magPreview: {
              variantKey: "saiga_phantom_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "PKP Bullpup Phantom",
            image: "/images/weapons/phantom/gun_pkp_bullpup.png",
            gallery: [
              "/images/weapons/phantom/gun_pkp_bullpup.png",
              "/images/weapons/phantom/gun_pkp_bullpup_white.png",
              "/images/weapons/phantom/gun_pkp_bullpup_camo1.png",
              "/images/weapons/phantom/gun_pkp_bullpup_camo2.png",
              "/images/weapons/phantom/gun_pkp_bullpup_camo3.png"
            ],
            damage: "37700",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x54 Phantom",
              image: "/images/weapons/ammo/phantom_762x54.png" 
            },
            magazine: "",
            magTypes: ["400", "700", "1000"],
            magPreview: {
              variantKey: "pkp_phantom_mag"
            },
            suppressors: suppressorPreset("pbsImmortal")
          },
          {
            name: "M170 Phantom",
            image: "/images/weapons/phantom/gun_m170.png",
            gallery: [
              "/images/weapons/phantom/gun_m170.png",
              "/images/weapons/phantom/gun_m170_white.png",
              "/images/weapons/phantom/gun_m170_camo1.png",
              "/images/weapons/phantom/gun_m170_camo2.png",
              "/images/weapons/phantom/gun_m170_camo3.png"
            ],
            damage: "67500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".308 Phantom",
              image: "/images/weapons/ammo/phantom_308.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "m170_phantom_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "MK-14 Phantom",
            image: "/images/weapons/phantom/gun_mk14.png",
            gallery: [
              "/images/weapons/phantom/gun_mk14.png",
              "/images/weapons/phantom/gun_mk14_white.png",
              "/images/weapons/phantom/gun_mk14_camo1.png",
              "/images/weapons/phantom/gun_mk14_camo2.png",
              "/images/weapons/phantom/gun_mk14_camo3.png"
            ],
            damage: "67500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".308 Phantom",
              image: "/images/weapons/ammo/phantom_308.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "mk14_phantom_mag"
            },
            suppressors: suppressorPreset("natoImmortal")
          },
          {
            name: "Reaper Phantom",
            image: "/images/weapons/phantom/gun_reaper.png",
            gallery: [
              "/images/weapons/phantom/gun_reaper.png",
              "/images/weapons/phantom/gun_reaper_white.png",
              "/images/weapons/phantom/gun_reaper_camo1.png",
              "/images/weapons/phantom/gun_reaper_camo2.png",
              "/images/weapons/phantom/gun_reaper_camo3.png"
            ],
            damage: "67500",
            fireModes: "Полуавтомат",
            fireRate: "600",
            ammo: {
              label: ".308 Phantom",
              image: "/images/weapons/ammo/phantom_308.png" 
            },
            magazine: "",
            magTypes: ["200", "400", "600"],
            magPreview: {
              variantKey: "reaper_phantom_mag"
            },
            suppressors: [
              {
                label: "Reaper",
                image: "/images/weapons/suppressor/supp_reaper.png",
                gallery: [
                  "/images/weapons/suppressor/supp_reaper.png",
                  "/images/weapons/suppressor/supp_reaper_white.png",
                  "/images/weapons/suppressor/supp_reaper_camo1.png",
                  "/images/weapons/suppressor/supp_reaper_camo2.png",
                  "/images/weapons/suppressor/supp_reaper_camo3.png"
                ]
              },
            ]
          },
          {
            name: "TAC-21 Phantom",
            image: "/images/weapons/phantom/gun_tac21.png",
            gallery: [
              "/images/weapons/phantom/gun_tac21.png",
              "/images/weapons/phantom/gun_tac21_white.png",
              "/images/weapons/phantom/gun_tac21_camo1.png",
              "/images/weapons/phantom/gun_tac21_camo2.png",
              "/images/weapons/phantom/gun_tac21_camo3.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            magazine: "",
            magTypes: ["10"],
            magPreview: {
              variantKey: "tac21_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "XM2010 Phantom",
            image: "/images/weapons/phantom/gun_xm2010.png",
            gallery: [
              "/images/weapons/phantom/gun_xm2010.png",
              "/images/weapons/phantom/gun_xm2010_white.png",
              "/images/weapons/phantom/gun_xm2010_camo1.png",
              "/images/weapons/phantom/gun_xm2010_camo2.png",
              "/images/weapons/phantom/gun_xm2010_camo3.png"
            ],
            damage: "8000000",
            fireModes: "Одиночный",
            hasFireRate: false,
            fireRate: "",
            ammo: {
              label: "Улучшенный патрон 20mm",
              image: "/images/weapons/ammo/20mm_ammo.png" 
            },
            magazine: "",
            magTypes: ["10"],
            magPreview: {
              variantKey: "xm2010_mag"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          }
        ]
      },
      {
        id: "specter",
        name: "Specter",
        kicker: "Серия",
        description: "Оружие, которое можно получить за коллекцию.",
        weapons: [
          {
            name: "AEK-919K Specter",
            image: "/images/weapons/specter/specter_aek.png",
            gallery: [
              "/images/weapons/specter/specter_aek.png"
            ],
            damage: "29500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "9x19 Specter",
              image: "/images/weapons/ammo/specter_9x19.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              image: "/images/weapons/specter/aek_mag.png"
            },
            suppressors: suppressorPreset("pistolImmortal")
          },
          {
            name: "Groza Specter",
            image: "/images/weapons/specter/specter_groza.png",
            gallery: [
              "/images/weapons/specter/specter_groza.png"
            ],
            damage: "29500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "7.62x39 Specter",
              image: "/images/weapons/ammo/specter_762x39.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              image: "/images/weapons/specter/groza_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "MP7A1 Specter",
            image: "/images/weapons/specter/specter_mp7.png",
            gallery: [
              "/images/weapons/specter/specter_mp7.png"
            ],
            damage: "29500",
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: {
              label: "4.6x30 Specter",
              image: "/images/weapons/ammo/specter_46x30.png" 
            },
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              image: "/images/weapons/specter/mp7_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          },
          {
            name: "Vulkan Specter",
            image: "/images/weapons/specter/specter_vulkan.png",
            gallery: [
              "/images/weapons/specter/specter_vulkan.png"
            ],
            damage: [
              {
                label: "5.56x45 Specter",
                value: "29500"
              },
              {
                label: "5.56x45 Specter Craft",
                value: "35100"
              }
            ],
            fireModes: "Автомат / Полуавтомат",
            fireRate: "900",
            ammo: [
              {
                label: "5.56x45 Specter",
                image: "/images/weapons/ammo/specter_556x45.png"
              },
              {
                label: "5.56x45 Specter Craft",
                image: "/images/weapons/ammo/specter_556x45_craft.png"
              }
            ],
            magazine: "",
            magTypes: ["150", "300", "450"],
            magPreview: {
              image: "/images/weapons/specter/vulkan_mag.png"
            },
            integratedSuppressor: "Встроенный глушитель",
            suppressors: []
          }
        ]
      },
    ];

window.YW_WEAPON_SERIES = seriesData;
})();
