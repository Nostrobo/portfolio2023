import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const gsapAnimation = {
	backgroundAnimation: (item: HTMLElement) => {

		const colors: string[] = ["#D9D9D9", "#FFFFFF", "#000000", "#9E9E9E"]

		gsap.set(item, { backgroundColor: "#D9D9D9" })

		const sections: gsap.DOMTarget[] = gsap.utils.toArray("[data-gsap=section]")

		sections.forEach((section, idx) => {
			ScrollTrigger.create({
				trigger: section,
				animation: gsap.to(item, {
					backgroundColor: colors[idx],
					immediateRender: false,
				}),
				toggleActions: "play none none reverse"
			})
		})
	},

	headerAnimation: (item: HTMLElement) => {
		gsap.set(item, { color: "#00000" })

		ScrollTrigger.create({
			trigger: "#about",
			animation: gsap.to(item, {
				color: "#FFFFFF",
				immediateRender: false,
			}),
			toggleActions: "play none none reverse"
		})

	},

	wordSplitterAnimation: (item: HTMLSpanElement[] | null[], delay?: number) => {

		if(!delay){
			delay = 0;
		}

		ScrollTrigger.create({
			trigger: item,
			end: () => "bottom+=400 center",
			animation: gsap.to(item, {
				y: 0,
				stagger: .04,
				duration: .5,
				delay: delay
			}),
			toggleActions: "play reverse play reverse"
		})
	},

	stackBarFillerAnimation: (item: HTMLElement, level: number) => {
		gsap.set(item, {
			width: 0

		})

		ScrollTrigger.create({
			trigger: item,
			start: () => "top-=150 center+=150",
			end: () => "bottom+=800 center",
			animation: gsap.to(item, {
				width: level * 2,
				duration: 1,
				delay: 1

			}),
			toggleActions: "play reverse play reverse",
		})
	},

	levelBarAnimation: (item: HTMLElement) => {
		gsap.set(item, {
			y: 150,
			opacity: 0
		})

		ScrollTrigger.create({
			trigger: item,
			start: () => "top-=150 center+=150",
			end: () => "bottom+=600 center",
			animation: gsap.to(item, {
				y: 0,
				opacity: 1,
				delay: 0

			}),
			toggleActions: "play reverse play reverse",
		})
	},

	aboutdisplayAnimation: (item: HTMLElement, delay:number) => {
		gsap.set(item, {
			y: 20,
			opacity:0
		})

		gsap.to(item, {
			y:0,
			opacity:1,
			delay:delay

		})
	},
	categoriesInfoAnimation: (item: HTMLElement)=>{
		gsap.set(item, {
			y: 200,
			opacity:0
		})

		ScrollTrigger.create({
			trigger: item,
			start:()=>"top-=100 center",
			end: () => "bottom+=600 center",

			animation: gsap.to(item, {
				y: 0,
				opacity:1
			}),
			toggleActions: "play reverse play reverse",
		})
	},
	imageHeroFadeIn : (item: HTMLElement) =>{
		gsap.set(item, {
			y: 200,
			opacity:0
		})

		ScrollTrigger.create({
			trigger: item,
			animation: gsap.to(item, {
				y: 0,
				opacity:1,
				delay:1,
				duration: 1
			}),
			toggleActions: "play reverse play reverse",
		})
	},
	imageFadeIn : (item: HTMLElement, trigger:HTMLElement) =>{
		gsap.set(item, {
			y: 200,
			opacity:0
		})

		ScrollTrigger.create({
			trigger: trigger,
			start:"top center+=150",
			end: () => "bottom+=600 center",
			animation: gsap.to(item, {
				y: 0,
				opacity:1
				
			}),
			toggleActions: "play none none none",
		})
	},
	descriptionFadeIn : (item: HTMLElement, trigger:HTMLElement) =>{
		gsap.set(item, {
			y: 200,
			opacity:0
		})

		ScrollTrigger.create({
			trigger: trigger,
			start:"top center+=150",
			end: () => "bottom+=600 center",
			animation: gsap.to(item, {
				y: 0,
				opacity:1
				
			}),
			toggleActions: "play none none none",
		})
	},



}

export default gsapAnimation