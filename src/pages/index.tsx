import { getSession } from "next-auth/react";

type Props = {
    props: any
}

const Home: React.FC<Props> = (props) => {
    return (
        <>
        
        
        </>
    )
}


export async function getServerSideProps(context: any) {
    const session = await getSession();

    if (session === null) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: { session }, // will be passed to the page component as props
    };
}

export default Home