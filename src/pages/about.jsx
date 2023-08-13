import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  const susunanPanitia = [
    {
      header: 'Pembina /  Penasehat',
      name: (
        <>
          Hari Daryono,SPd <br />
          Lulus Suprayogo,ST ( Ketua Rw 012 )
        </>
      ),
    },
    {
      header: 'Ketua',
      name: 'Arif Sihabudin,SE',
    },
    {
      header: 'Sekretaris',
      name: (
        <>
          Sugianto <br />
          Hendrik
        </>
      ),
    },
    {
      header: 'Bendahara',
      name: (
        <>
          Sujarwono <br />
          Imat Hismatulloh
        </>
      ),
    },
    {
      header: 'Sie Ibadah & Dakwah',
      name: (
        <>
          Abdul Said, SE <br />
          Suhartono, ST
        </>
      ),
    },
    {
      header: 'Sie  Pembangunan dan Perawatan',
      name: (
        <>
          Rahmat Hidayat,SE <br />
          Jarwoto,ST <br />
          Joni <br />
          Ahmad Tukio <br />
          Tubandi <br />
          Misno S
        </>
      ),
    },
    {
      header: 'Sie Kerumah- Tanggaan',
      name: (
        <>
          Eka Yulianta,SPd Azwardi <br />
          Andi Lala <br />
          Kandar <br />
          Hendra
        </>
      ),
    },
    {
      header: 'Sie Humas dan Informatika',
      name: (
        <>
          Sugeng,ST Supardi <br />
          James Wijayanto,ST <br />
          Ashadi Cahyadi
        </>
      ),
    },
    {
      header: 'Sie Sosial dan Kemasyarakatan',
      name: (
        <>
          Agus Supriyanto Mahruf <br />
          Mahruf <br />
          Taufik
        </>
      ),
    },
    {
      header: 'Sie Pendidikan dan Kaderisasi Remaja',
      name: (
        <>
          Satiri,SPd <br />
          Eppy Syafitri <br />
          Agus Aprianto
        </>
      ),
    },
    {
      header: 'Sie Keamanan',
      name: (
        <>
          Rully <br />
          Huda Mustofa <br />
          Sukamto <br />
          Muklis Solimin
        </>
      ),
    },
    {
      header: 'Rukun Kematian',
      name: (
        <>
          Agus Taufiq,Spdi <br />
          Nurrochman,Spd <br />
          Amiratno, SH <br />
          Halimah
        </>
      ),
    },
    {
      header: 'ZIS',
      name: (
        <>
          Sakim <br />
          Saring <br />
          Parwanto
        </>
      ),
    },
    {
      header: "Majelis Ta'lim Ibu-Ibu",
      name: 'Ibu Devi',
    },
    {
      header: 'Remaja Islam',
      name: (
        <>
          Andika <br />
          Rizky <br />
          Awang <br />
          Aditya
        </>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Tentang - Masjid Al-Ikhlas</title>
        <meta
          name="description"
          content="Masjid Al-Ikhlas Perumahan Taman Alamanda."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Tentang Masjid Al-Ikhlas Perumahan Taman Alamanda
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                &emsp;Sejarah Berdiri dan Perkembangannya Tanah lokasi Masjid di
                Perumahan Taman Alamanda Blok B RW 12 Karang Satria Tambun Utara
                Kabupaten Bekasi merupakan komplek perumahan baru tahun 2004.
                Sebagaimana komplek perumahan lainnya yang telah dibangun
                Perumahan, di komplek perumahan Taman Alamanda ini pihak
                Pengembang juga menyediakan fasilitas sosial berupa lahan untuk
                tempat ibadah bagi umat beragama. Di antaranya adalah lahan
                seluas 1500 M2 yangdiperuntukan sebagai tempat ibadah bagi umat
                Islam. Untuk mengelola lahan tersebut, maka warga muslim
                penghuni perumahan Taman AlamandaI berinisiatif untuk membangun
                Masjid pada lahan tersebut. Pada awal berdirinya, berdasarkan
                hasil musyawarah warga muslim perumahan taman alamanda yang
                dilaksanakan tanggal 11 Maret 2005 serta tanggal 25 Maret 2005
                tentang rencana pembangunan masjid dan pembentukan panitia
                pembangunan masjid. Maka dibuatlah Proposal yang di Tanda
                Tangani Pengurus RT dan RW Perumahan Taman Alamanda yang
                ditujukan kepada Yayasan Bulan Sabit Merah Kedutaan Besar Uni
                Emirat Arab. Alhamdulillah Proposal yang diajukan, disetujui
                pada bulan april 2005 oleh Kedutaan Besar Uni Emirat Arab dalam
                bentuk rancangan bangunan, biaya pembelian material serta biaya
                tukang untuk pembangunan Masjid. Sementara untuk biaya makan
                tukang ditanggung oleh warga Taman Alamanda secara swadaya
              </p>
            </div>
          </div>
          {/* <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div> */}
        </div>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Susunan Panitia Pembangunan Masjid Al Ikhlas :
            <table className="w-full">
              {susunanPanitia.map((o) => (
                <tr
                  key={o.name}
                  className="border-b-2 text-left odd:bg-gray-50"
                >
                  <th className="px-3">{o.header}</th>
                  <td>:</td>
                  <td className="p-3">{o.name}</td>
                </tr>
              ))}
            </table>
          </p>
        </div>
      </Container>
    </>
  )
}
