import Image from 'next/image'
import Form from 'components/form'
import { GetServerSidePropsContext } from 'next'
import { ExplicitAny } from '@types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@i18nconfig'

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <a href="https://dub.sh">
            {/* <Image
              src="/logo-single.png"
              alt="Logo"
              className="h-20 w-20"
              width={300}
              height={300}
            /> */}
          </a>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { locale } = ctx as ExplicitAny

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}
