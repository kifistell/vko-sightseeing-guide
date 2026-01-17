function placeCard(title, img, text, pos = "center 35%") {
    return `
    <article class="place-card">
      <div class="place-media">
        <img class="place-photo" src="${img}" alt="${title}" style="object-position:${pos}">
        <div class="place-media-overlay"></div>
      </div>
      <div class="place-body">
        <h2 class="place-title">${title}</h2>
        <p class="place-text">${text}</p>
      </div>
    </article>
  `;
}


const places = [
    // MOUNTAINS & RANGES
    {
        name: "Altai (Katon-Karagay)",
        type: "mountains",
        content: placeCard(
            "Altai (Katon-Karagay)",
            "altai.jpeg",
            "The Altai mountain area is a flagship nature destination of the region and sets a high standard for eco-tourism. Conifer forests, high-mountain valleys, and a dense river network create a wide variety of routes. For a trip, plan 2–4 days to include viewpoints and short hikes. The best seasons are late spring, summer, and early autumn, when the weather is more stable and visibility is at its best. When visiting, follow protected-area rules and plan logistics in advance due to the remoteness of many locations.",
            "center 60%"

        )
    },
    {
        name: "Eastern Altai",
        type: "mountains",
        content: placeCard(
            "Eastern Altai",
            "vostochaltai.jpg",
            "Eastern Altai is a land of contrasts: high mountains, taiga, and glacial landforms create impressive panoramas. It is well suited for active travel—day hikes, photo tours, and nature observation. Routes require basic fitness and careful weather planning, especially in shoulder seasons. The most comfortable period is July–September, when temperature swings are less sharp. For a better trip, go with a guide or follow proven tracks, and make sure you have navigation and connectivity.",
            "center 60%"
        )
    },
    {
        name: "Bukhtarma Range",
        type: "mountains",
        content: placeCard(
            "Bukhtarma Range",
            "buhtarma.jpg",
            "The Bukhtarma Range is known for long ridgelines and viewpoints, enabling routes of different difficulty levels. The terrain allows you to combine day crossings with stops in valleys and near water. When planning, consider elevation changes and limited infrastructure in remote sections. Summer and early autumn are typically the most predictable seasons, reducing time and safety risks. A good strategy is to define start/finish points, water locations, and a backup plan in case of bad weather.",
            "center 60%"

        )
    },
    {
        name: "Sarymsak Range",
        type: "mountains",
        content: placeCard(
            "Sarymsak Range",
            "sarym.jpg",
            "The Sarymsak Range is a strong option for trekking and scenic routes focused on natural landscapes. You can choose short outings or longer crossings with proper preparation. For a comfortable trip, assess road access and seasonal passability in advance. The best weather windows are stable summer and dry early autumn, with fewer rains and better visibility. For group trips, set safety rules and time control to avoid returning after dark.",
            "center 60%"

        )
    },

    // LAKES & RESERVOIRS
    {
        name: "Bukhtarma Reservoir",
        type: "lakes",
        content: placeCard(
            "Bukhtarma Reservoir",
            "buhtarmail.jpeg",
            "Bukhtarma Reservoir is a major water destination for lakeside relaxation, walks, and seasonal activities. The shoreline offers many options—from calm beach areas to more secluded spots. For practical planning, choose an area with good access and infrastructure, especially during peak months. The most popular period is June–August, when the water is warmer and more services are available. Follow navigation and fire-safety rules, as coastal areas can be sensitive to heavy use.",
            "center 60%"
        )
    },
    {
        name: "Zaysan",
        type: "lakes",
        content: placeCard(
            "Lake Zaysan",
            "zaisan.jpg",
            "Lake Zaysan feels like a vast open space, valued for its wide horizons and calm waters. It suits scenic drives, fishing trips, and routes focused on steppe landscapes. For reliable planning, consider wind exposure and rapidly changing conditions on the water. The warm season is best, with easier road access and more opportunities for longer stops. A practical approach is to plan supply points in advance and not rely on random infrastructure far from settlements."
        )
    },
    {
        name: "Markakol",
        type: "lakes",
        content: placeCard(
            "Markakol",
            "qwerty.jpg",
            "Markakol is a high-mountain lake with a strong natural identity and a reputation as a quiet, unhurried destination. People come here for low-impact relaxation, nature observation, and gentle walks. Plan extra time for the road and for weather variability typical of highlands. The optimal season is mid-summer and early autumn, when conditions are most stable. To preserve the area, follow visiting rules and minimize impact—especially waste and fire use."
        )
    },


    // FORESTS & TAIGA
    {
        name: "Altai Forests",
        type: "forests",
        content: placeCard(
            "Altai Forests",
            "altai-gory.jpg",
            "Altai forests are a valuable natural and recreational zone where conifer massifs and clean air create the main appeal. Typical visits include walking trails, picnic areas, and nature photography. For responsible travel, use official trails and designated rest areas to reduce pressure on the ecosystem. Summer and early autumn are the most comfortable seasons, with better trail conditions and less dampness. Priorities include strict fire safety and the leave no trace principle.",
            "center 80%"
        )
    },
    {
        name: "Irtysh Ribbon Pine Forests",
        type: "forests",
        content: placeCard(
            "Irtysh Ribbon Pine Forests",
            "priirtysh.jpg",
            "Ribbon pine forests are a rare landscape type where pine stands form elongated ribbons on sandy soils. The area is convenient for short trips, walks, and family outings without heavy physical demands. From a planning standpoint, choose clear entry points and safe parking in advance. Dry months are best, when trails are less muddy and walking is more comfortable. The key standard is strict fire control and careful treatment of undergrowth.",
            "center 15%"
        )
    },
    {
        name: "Siberian Taiga",
        type: "forests",
        content: placeCard(
            "Siberian Taiga",
            "Vostochnaya-sibir.jpg",
            "The Siberian taiga is a high-value ecosystem dominated by dense conifer cover. Calm tourism formats work best here: nature observation, quiet walks, and photo routes. Safe visits require disciplined navigation, as uniform terrain can make orientation difficult. Plan trips for periods of stable weather with limited precipitation. For group organizers, it is recommended to define the route in advance, confirm connectivity points, and set rules for wildlife encounters.",
            "center 65%"
        )

    },

    // PLATEAUS
    {
        name: "Katon-Karagay Plateau",
        type: "plateaus",
        content: placeCard(
            "Katon-Karagay Plateau",
            "katon-plato.jpg",
            "The Katon-Karagay Plateau is valued for open spaces and relatively even highland sections that suit panoramic routes. It is ideal for moderate trekking and photo tours focused on wide views. For good planning, consider altitude, wind exposure, and limited shelter in open areas. Stable summer is the best time, with fewer risks of sudden cold snaps and storms. Agree on logistics in advance and keep a time buffer—weather on the plateau can change quickly.",
            "center 45%"

        )
    },
    {
        name: "Ulba Plateau",
        type: "plateaus",
        content: placeCard(
            "Ulba Plateau",
            "ulbi.jpg",
            "The Ulba Plateau features rocky forms and viewpoints, making it suitable for short trips and active walks. The relief allows routes of 2–6 hours without expedition-level preparation. From an organizational standpoint, keep safety near cliffs in mind and choose trails with clear markings. The most comfortable season is dry weather, when rocky sections are less slippery. For groups, set meeting points in advance and control the pace to avoid overload."
        )
    },

    // CANYONS & GORGES
    {
        name: "Turgen Gorge",
        type: "canyons",
        content: placeCard(
            "Turgen Gorge",
            "turgen.jpg",
            "Turgen Gorge is a route-style destination where elevation changes and a river corridor define the experience. It works well as a one-day program with several stops and short walks. For a stable schedule, plan timing to avoid returning after dusk and consider seasonal trail wetness. Warm months without prolonged rains are the most comfortable, with better passability. Keep a safe distance near rocky areas and stay on established trails."
        )
    },
    {
        name: "Black Canyon of the Irtysh",
        type: "canyons",
        content: placeCard(
            "Black Canyon of the Irtysh",
            "cherni_irtish.jpg",
            "The Black Canyon is known for striking rock outcrops and the contrast between stone and the river line. It is especially strong for photo routes and scenic stops where composition and light matter. For proper organization, identify safe platforms in advance and avoid uncontrolled approaches to edges. Clear weather is optimal, with maximum visibility and fewer slippery sections. Keep the area clean, do not damage fragile edges, and avoid trampling vegetation on slopes."
        )
    },
    {
        name: "Aksu",
        type: "canyons",
        content: placeCard(
            "Aksu Canyon",
            "kanyon-aksu.jpg",
            "Aksu Canyon stands out for its geology and dramatic vertical rock walls. It suits active walks and routes where narrow passages and strong views are the priority. When planning, consider seasonal precipitation: after rain, rocks and soil become less safe. The best time is dry periods with predictable weather and stable visibility. Follow the route strictly, carry enough water, and keep away from potentially unstable, crumbling sections.",
            "center 65%"
        )
    },

    // STEPPES & MEADOWS
    {
        name: "Katon-Karagay Meadows",
        type: "steppes",
        content: placeCard(
            "Katon-Karagay Meadows",
            "osyl.jpeg",
            "Katon-Karagay meadows offer gentle landscapes and strong seasonal appeal. They work well for calm walks, family routes, and photo sessions with mountain backgrounds. For best results, choose the flowering period and stable weather, when the meadows are most expressive. From an organizational standpoint, consider the lack of shade and the need for sun and wind protection. The recommended standard is to avoid trampling flowering areas and not drive off-road.",
            "center 65%"
        )
    },


    // GLACIERS
    {
        name: "Eastern Altai Glaciers",
        type: "glaciers",
        content: placeCard(
            "Eastern Altai Glaciers",
            "sofiyski.jpg",
            "Eastern Altai glaciers are a strategic natural resource that shapes river sources and water regimes in mountain valleys. For visitors, they are a high-value visual landmark and a rare kind of natural experience. Travel here requires caution: safe routes, appropriate gear, and guidance if needed. Plan visits during stable weather seasons, when avalanche and rockfall risks are lower. Keep a safe distance from crevasses and never step onto ice without proper training."
        )
    },
    {
        name: "Belukha Glacier",
        type: "glaciers",
        content: placeCard(
            "Belukha Glacier",
            "beluha.png",
            "Belukha Glacier is one of the most recognizable high-mountain attractions and a key reference point for alpine routes. It delivers a strong visual impact and is valued for its clean mountain aesthetics. Visiting requires strict safety discipline, as high altitude demands good weather windows and proper equipment. Plan via proven tracks and consider acclimatization for longer outings. Priorities include minimizing environmental impact and following guidance from local guides and services."
        )
    },

    // RIVERS
    {
        name: "Irtysh",
        type: "rivers",
        content: placeCard(
            "Irtysh River",
            "irtysh_2.jpg",
            "The Irtysh is the region’s backbone river and an important transport and landscape corridor. For travelers, it offers embankments, viewpoints, and pleasant waterside walks. When planning, consider seasonal water levels and wind conditions in open areas. A strong format is to combine city spots with nature stops upstream or downstream. Follow water safety rules and choose official places for rest and shoreline access."
        )
    },
    {
        name: "Bulak",
        type: "rivers",
        content: placeCard(
            "Bulak River",
            "bulak.jpg",
            "Bulak is a typical mountain river valued for cold water, a rocky riverbed, and a dynamic current. It suits short walks, route stops, and natural photo scenes. For organization, keep in mind slippery stones and quick changes in water level after precipitation. Dry weather is best, when trails and approaches are safer. Choose rest areas with stable banks and avoid unnecessary wading crossings.",
            "center 60%"
        )
    },
    {
        name: "Turgusun",
        type: "rivers",
        content: placeCard(
            "Turgusun River",
            "tursugyn.jpg",
            "Turgusun is a river destination where valleys and coastal nature zones shape the experience. It fits well into travel programs with drives, when short scenic stops are needed. For quality visits, identify access roads and safe descent points to the water in advance. Warm months without long rains are the most comfortable, with clearer water and more stable approaches. Keep the shoreline clean to preserve the natural character of the area."
        )
    },
    {
        name: "Katon",
        type: "rivers",
        content: placeCard(
            "Katon River",
            "katon-rika.jpg",
            "The Katon River acts as a mountain axis that connects valleys and key nature points. It is valued for clear water, mountain-slope views, and routes along the river corridor. For logistics, consider seasonal flow patterns and the condition of dirt-road access. Summer and early autumn are the most predictable periods. Stay within safe bank zones and avoid approaching water near steep drop-offs.",
            "center 65%"
        )
    }
];

// keep the rest of the code as-is:
const buttons = document.getElementById("buttons");
const info = document.getElementById("info");

function render(list) {
    buttons.innerHTML = "";
    list.forEach(p => {
        const b = document.createElement("button");
        b.textContent = p.name;
        b.onclick = () => info.innerHTML = p.content;
        buttons.appendChild(b);
    });
}

function applyFilter() {
    const v = document.getElementById("filter").value;
    render(v === "all" ? places : places.filter(p => p.type === v));
}

render(places);
