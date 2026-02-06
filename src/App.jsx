import React from 'react'

const App = () => {
  return (
    <div className='flex items-center justify-center px-6 min-h-dvh'>
      <section className="flex max-w-[1170px] w-full justify-between">
        <div className='w-full flex-1'>
          <h1 className='text-[32px] font-bold text-gray-600 font-noto-bold leading-[150%]'>პროექტის შესახებ</h1>
          <p className='text-[14px] text-gray-600 loading-[150%] text-justify mb-[28px] mt-[33px] max-w-[437px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, excepturi totam. Ipsum eius optio beatae dolores iusto nisi dolore, possimus necessitatibus neque eum praesentium temporibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae minus, unde consequatur quo porro incidunt enim accusantium maiores sint a deserunt dignissimos placeat quas blanditiis.</p>
          <a  href="#" className='text-green-400 bg-yellow-50 px-[23px] py-[12px] rounded-[10px] border-green-500 hover:bg-green-950 duration-300 transition-all font-[500px]'>სრულად</a>
        </div>

        <div className='flex-1'>
          <img className='w-[652px]' src="https://compote.slate.com/images/15702d9a-be4c-4df0-83f5-4c113328c45a.jpg?width=1200" alt="no mastermind" />
        </div>

      </section>
    </div>
  )
}

export default App