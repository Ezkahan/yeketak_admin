import api from "common/config/api.service";
import statusByCode from "common/helpers/statusByCode";
import HomepageService from "common/services/homepage.service";
import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

const Index = () => {
  const [marketProducts, setMarketProducts] = useState([]);
  const [serviceProducts, setServiceProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("market");

  useEffect(() => {
    HomepageService.loadNewMarketProducts()
      .then((res) => {
        setMarketProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    HomepageService.loadNewServiceProducts()
      .then((res) => {
        setServiceProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-12">
          <div className="flex flex-col mb-5">
            <div className="flex items-center justify-center">
              <Tabs
                onChange={(tabId) => setActiveTab(tabId)}
                defaultTab="market"
              >
                <TabList className="flex justify-between items-center mb-3">
                  <header className="flex flex-col">
                    <Title> Täze harytlar </Title>
                    <small>
                      Jemi: {marketProducts.length + serviceProducts.length}
                    </small>
                  </header>
                  <nav className="flex">
                    <Tab tabFor="market">
                      <button
                        className={`duration-500 border border-yellow-300 ${
                          activeTab == "market"
                            ? "bg-yellow-300 text-slate-900"
                            : "bg-slate-900 text-yellow-300 opacity-80"
                        }  flex mr-3 pl-4 pr-7 py-2 5 btn-round`}
                      >
                        <p>Magazin</p>
                        <small className="bg-red-500 text-xs flex items-center justify-center text-white w-6 h-6 rounded-full ml-2">
                          {marketProducts.length}
                        </small>
                      </button>
                    </Tab>
                    <Tab tabFor="service">
                      <button
                        className={`duration-500 border border-yellow-300 ${
                          activeTab == "service"
                            ? "bg-yellow-300 text-slate-900"
                            : "bg-slate-900 text-yellow-300 opacity-80"
                        }  flex mr-3 pl-4 pr-7 py-2 5 btn-round`}
                      >
                        <p>Hyzmat</p>
                        <small className="bg-red-500 text-xs flex items-center justify-center text-white w-6 h-6 rounded-full ml-2">
                          {serviceProducts.length}
                        </small>
                      </button>
                    </Tab>
                  </nav>
                </TabList>

                <TabPanel tabId="market">
                  <table className="table-fixed w-full">
                    <thead className="text-left bg-slate-800 text-yellow-300/70 text-sm">
                      <tr>
                        <th className="w-16 xl:w-5 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                          ID
                        </th>
                        <th className="w-48 px-5 py-2">Ady</th>
                        <th className="w-28 px-5 py-2">Ýagdaýy</th>
                        <th className="w-24 px-5 py-2">Eyesi</th>
                        <th className="w-32 xl:w-20 px-5 py-2 rounded-tr-lg rounded-br-lg">
                          Sazlama
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketProducts.length > 0 &&
                        marketProducts.map((marketProduct, index) => {
                          return (
                            <tr
                              key={index}
                              className="border-slate-800 border-b rounded-lg last:border-none"
                            >
                              <td className="px-5 py-2">{marketProduct.id}</td>
                              <td className="px-5 py-2">
                                {marketProduct.name}
                              </td>
                              <td className="px-5 py-2 text-xs">
                                {statusByCode(marketProduct.confirm)}
                              </td>
                              <td className="px-5 py-2 text-xs">
                                {marketProduct.market?.name}
                              </td>
                              <td className="px-5 py-2">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    // onClick={() => userEditHandler(user)}
                                    className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                                  >
                                    <RiEdit2Fill size={18} />
                                  </button>
                                  <button
                                    type="button"
                                    // onClick={() =>
                                    //   userDeleteHandler(user.id, user.name)
                                    // }
                                    className="cursor-pointer w-10 h-10 border border-red-900 text-red-500 hover:bg-red-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                                  >
                                    <FaTrash size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel tabId="service">
                  <table className="table-fixed w-full">
                    <thead className="text-left bg-slate-800 text-yellow-300/70 text-sm">
                      <tr>
                        <th className="w-16 xl:w-5 px-5 py-2 rounded-tl-lg rounded-bl-lg">
                          ID
                        </th>
                        <th className="w-48 px-5 py-2">Ady</th>
                        <th className="w-28 px-5 py-2">Ýagdaýy</th>
                        <th className="w-24 px-5 py-2">Eyesi</th>
                        <th className="w-32 xl:w-20 px-5 py-2 rounded-tr-lg rounded-br-lg">
                          Sazlama
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceProducts.length > 0 &&
                        serviceProducts.map((serviceProduct, index) => {
                          return (
                            <tr
                              key={index}
                              className="border-slate-800 border-b rounded-lg last:border-none"
                            >
                              <td className="px-5 py-2">{serviceProduct.id}</td>
                              <td className="px-5 py-2">
                                {serviceProduct.name}
                              </td>
                              <td className="px-5 py-2 text-xs">
                                {statusByCode(serviceProduct.confirm)}
                              </td>
                              <td className="px-5 py-2 text-xs">
                                {serviceProduct.service?.name}
                              </td>
                              <td className="px-5 py-2">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    // onClick={() => userEditHandler(user)}
                                    className="cursor-pointer w-10 h-10 mr-2 border border-blue-900 text-blue-500 hover:bg-blue-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                                  >
                                    <RiEdit2Fill size={18} />
                                  </button>
                                  <button
                                    type="button"
                                    // onClick={() =>
                                    //   userDeleteHandler(user.id, user.name)
                                    // }
                                    className="cursor-pointer w-10 h-10 border border-red-900 text-red-500 hover:bg-red-500 hover:text-white duration-500 flex justify-center items-center rounded-xl"
                                  >
                                    <FaTrash size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
