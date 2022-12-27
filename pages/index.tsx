import Box from '@src/components/Box';
import type { NextPage } from 'next';
const Home: NextPage = () => {
    return (
        <>
            <main>testando Testando</main>
            <Box
                flex
                items="center"
                justify="space-between"
                h="300px"
                space="100px"
                rounded="7px"
                w="90%"
                border="3px"
                bColor="error"
                py="12px"
                px="12px"
                center>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur suscipit libero excepturi hic
                    nesciunt labore voluptates doloremque placeat ipsa, temporibus quidem deserunt expedita nemo
                    officiis, mollitia aut. Et, nam quidem.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus odio reprehenderit delectus
                    assumenda. Odio aliquam omnis, hic doloremque, veritatis tenetur vitae, quas quia laboriosam
                    consectetur quo ea odit repellendus impedit!
                </p>
            </Box>
        </>
    );
};

export default Home;
