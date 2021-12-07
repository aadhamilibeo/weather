import React from 'react'
import SearchForm from '../../component/SearchForm';
import WeatherDetail from '../../component/WeatherDetail';
import WeatherStatus from '../../component/WeatherStatus';
import Loader from '../../component/Loader';
import Default from '../../layout/Default';
import { temperature } from '../../context/MyContect'



const City = ({ data }: any) => {
    const { search }: any = React.useContext(temperature);
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(async () => {
            setLoading(false)
        }, 2000);
    }, [])
    if (loading) {
        return (
            <Default>
                <Loader />
            </Default>
        )
    }
    else {
        return (
            <Default>
                <div className="main">
                    {search ? <WeatherStatus data={data.consolidated_weather} title={data.title} /> :
                        <SearchForm />}
                    <WeatherDetail data={data} />
                </div>
            </Default>
        );
    }
};

export default City;

export async function getServerSideProps(context: any) {
    const { id } = context.query;

    const res = await fetch(`https://www.metaweather.com/api/location/search/?query=${id}`);

    try {
        const datas = await res.json();
        const cityValue = datas[0].woeid;
        const response = await fetch(`https://www.metaweather.com/api/location/${cityValue}/`)
        const data = await response.json()
        return {
            props: {
                data
            }
        }
    }
    catch (err) {
        return {
            redirect: {
                destination: '/city',
                permanent: false,
            }
        };
    }



}
