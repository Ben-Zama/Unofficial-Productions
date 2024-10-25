var openIyi = document.getElementById('openIyi')
var openKay = document.getElementById('openKay')
var openEkene = document.getElementById('openEkene')
var modal = document.getElementById('modal')
var closeModal = document.getElementById('modalClose')
var mainContainer = document.getElementById('mainContainer')
var modalHeader = document.getElementById('modalHeader')
var modalText = document.getElementById('modalText')


closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    mainContainer.style.overflow = 'auto'
    mainContainer.style.position = 'relative'
})

openIyi.addEventListener('click', () => {
    modal.style.display = 'flex'
    mainContainer.style.overflow = 'hidden'
    mainContainer.style.position = 'fixed'
    modalHeader.innerHTML = "Iyi's Story"
    modalText.innerHTML = "<p>I started making music from way back in JSS1 creating melodies in my head and playing them in my head. This habit was gotten from my mum cus she used to make songs for us as kids and I picked up from there and started making songs for people and stuff I was going through and some of these melodies are what I use in the songs I make today. Started doing music professionally when I was like 14 tho my brothers friend helped me record a song then I had more confidence in myself as time went on and continued creating and everytime I thought I was the bomb I always kept on surpassing that level of artistry and getting even better and till today im still on that plain of improvement.</p><br>" +
"<p>I'm doing music because it feels right to do it. It's not passive, it's purposeful. There's intent in every single thing I do and that is spiritual. God is the inspiration, he's the director i'm just following the script.</p><br>" +
"<p>Faces is a love song mehn as simple as that. The song was supposed to be for my girl at the time I wrote it in 2022 but we broke up but the song was too good to just let go lmaoo</p><br></br>"
})

openKay.addEventListener('click', () => {
    modal.style.display = 'flex'
    mainContainer.style.overflow = 'hidden'
    mainContainer.style.position = 'fixed'
    modalHeader.innerHTML = "NM Kay's Story"
    modalText.innerHTML = "<p>NM Kay, an independent artist breaking through in the Nigerian music industry, discovered his love for creating music while still in secondary school. He honed his skills by composing songs on BandLab, a mobile music production application. It was during this time that he realized his passion for music. With over 1,000 followers on Instagram, Nm Kay's most popular track, “Fakes,” has garnered a significant number of streams. Keep an eye on this talented artist; his future looks promising!</p>"
})
openEkene.addEventListener('click', () => {
    modal.style.display = 'flex'
    mainContainer.style.overflow = 'hidden'
    mainContainer.style.position = 'fixed'
    modalHeader.innerHTML = "Ekene's Story"
    modalText.innerHTML = "<p>Hi, I'm Ekene Emmanuel, also known as Keith. I was born on the 20th of October 2004 in the city of Jos, located in Plateau State, Nigeria. Currently, I'm a university student, constantly expanding my knowledge and honing my skills.</p><br>" +
"<p>Beyond my academic commitments, I transform into a dynamic individual with a passion for web development. I also find joy in capturing moments as a perceptive photographer and crafting compelling narratives through videography.</p><br>" +
                "<p>I break conventional boundaries, refusing to settle for ordinary snapshots. Every photograph I take transcends the present, weaving together elements that inspire the future. My creative impulse draws inspiration from a myriad of sources, turning the ordinary into extraordinary. Armed with nothing but my trusty smartphone, I immerse myself in my craft, infusing each shot with a unique perspective. In my hands, every image emerges as a pristine reflection of my creative vision, encapsulating moments that resonate deeply with those who view them.</p><br>" +
                "<p>Your passion and dedication shine through in your words! Keep creating and capturing those extraordinary moments.</p><br>"
        })