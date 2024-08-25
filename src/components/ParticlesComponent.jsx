    import Particles, { initParticlesEngine } from "@tsparticles/react";
    import { useEffect, useMemo, useState } from "react";
    import { loadSlim } from "@tsparticles/slim";

    const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(() => ({
        background: {
        color: {
            value: "#fffff", // Latar belakang putih
        },
        },
        fpsLimit: 120,
        interactivity: {
        events: {
            onClick: {
            enable: true,
            mode: "repulse",
            },
            onHover: {
            enable: true,
            mode: 'grab',
            },
        },
        modes: {
            push: {
            distance: 200,
            duration: 15,
            },
            grab: {
            distance: 150,
            },
        },
        },
        particles: {
        color: {
            value: "#003366", // Warna partikel biru tua
        },
        links: {
            color: "#003366", // Warna garis koneksi partikel
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
            default: "bounce",
            },
            random: true,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
            enable: true,
            },
            value: 150,
        },
        opacity: {
            value: 0.5, // Nilai opacity default untuk warna partikel
            random: {
            enable: true, // Aktifkan opacity acak
            minimumValue: 5.5, // Nilai minimum opacity
            },
            animation: {
            enable: true, // Aktifkan animasi opacity
            speed: 2, // Kecepatan animasi
            minimumValue: 0.4, // Nilai minimum opacity saat animasi
            sync: false, // Sinkronisasi animasi antara partikel
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
        },
        detectRetina: true,
    }), []);

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
    };

    export default ParticlesComponent;
