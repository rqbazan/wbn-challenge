import React from 'react'
import MainLayout from '../layouts/main'
import { Select, Input, Button } from '../components'

export default function IndexPage() {
  return (
    <MainLayout>
      <p className="text-xs mt-6 text-center w-10/12 self-center">
        WBN (Worlwide Business Network) is a professional &quot;Industrial B2B
        Social Network&quot; createad to support, democratically, the world
        distributors, buyers and manufactures suppliers to start and develop
        their own business in the most important markets... WBN gives yoy the
        best B2B experience FOR FREE.
      </p>
      <div className="flex justify-center mt-6">
        <div className="flex rounded-t-full rounded-b-full overflow-hidden max-w-4xl w-9/12">
          <div className="flex-1 flex-shrink-0">
            <Select prompt="Manufactures">
              <option>Manufacture A</option>
              <option>Manufacture B</option>
              <option>Manufacture C</option>
            </Select>
          </div>
          <div className="flex-1 flex-shrink-0">
            <Select prompt="Global">
              <option>Global A</option>
              <option>Global B</option>
              <option>Global C</option>
            </Select>
          </div>
          <div className="flex-auto">
            <Input
              placeholder="Search companies and products"
              iconName="search"
            />
          </div>
        </div>
      </div>
      <a className="text-xs mt-6 text-center" href="#placeholder">
        WBN. Your Gateway to the Worldwide Manufacturing Suppliers
      </a>
      <div
        className="flex justify-around mt-6 px-8"
        style={{ height: '19rem' }}
      >
        <img className="h-full" src="/img/image-left.png" alt="made in italy" />
        <div className="flex flex-col justify-between items-center py-8">
          <p className="text-xs text-center max-w-xxs px-5">
            WBN, as industrial B2B Network, guarantees a perfect B2B connection
            between distributors, vendors, suppliers, manufactures, private
            label business, buyers and full players of the products import and
            export global industry.
          </p>
          <Button>Register Now and Go Global</Button>
        </div>
        <div className="flex flex-col justify-around">
          <img className="rounded-xl" src="/img/image-right-1.jpg" alt="" />
          <img className="rounded-xl" src="/img/image-right-2.jpg" alt="" />
        </div>
      </div>
      <div className="flex h-64 px-8 mt-6">
        <div className="flex-1 flex justify-center items-center">
          <p className="text-xs text-center px-12 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            tincidunt ante nisi, at gravida nunc sagittis in. Maecenas imperdiet
            enim augue. Maecenas arcu lorem, congue ac rutrum at, iaculis eget
            tellus. Nullam id nulla at ligula sollicitudin fringilla nec in
            odio. Sed tincidunt, orci sit amet pulvinar tristique, odio sem
            congue ante, sit amet semper ligula risus nec felis. Maecenas
            suscipit nunc nunc, in volutpat lorem tristique in. Fusce
            scelerisque eros a pulvinar vulputate. Nullam sed lobortis neque,
            sit amet pharetra augue. Sed accumsan quis purus a facilisis.
          </p>
        </div>
        <div className="flex-1 bg-gray-800" />
      </div>
      <div className="flex mt-6 justify-center mb-6 ">
        <Button color="secondary" className="mr-4">
          Latest Manufactures registered in our B2B Social Network
        </Button>
        <Button color="secondary">
          Latest Distributors registered in our B2B Social Network
        </Button>
      </div>
    </MainLayout>
  )
}
