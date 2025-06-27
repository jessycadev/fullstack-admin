import React, { useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetQuartosQuery } from "state/api";
import { useGetUserQuery } from "state/api";

const Quarto = ({
    _id,
    identificador,
    ocupante_Id,
    alojamento,
    status,
    dataEntrada,
    dataSaida,

}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                {status}
                </Typography>
                <Typography variant="h5" component="div">
                Número do Quarto: {identificador}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                    {alojamento}
                </Typography>

                <Typography variant="body2">Data Entrada: {dataEntrada}</Typography>
                <Typography variant="body2">Data Saída: {dataSaida}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    See More
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300],
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {status}</Typography>
                    <Typography>
                        Yearly Sales This Year: {dataEntrada}
                    </Typography>
                    <Typography>
                        Yearly Units Sold This Year: {dataSaida}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

const Quartos = () => {
    const { data, isLoading } = useGetQuartosQuery();
    const { dadosUsuario } = useGetUserQuery();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="BILL" subtitle="Alojamento" />
            {data || !isLoading ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    {data.map(
                        ({
                            _id,
                            identificador,
                            alojamento,
                            status,
                            dataEntrada,
                            dataSaida,
                        }) => (
                            <Quarto
                                key={_id}
                                _id={_id}
                                identificador={identificador}
                                alojamento={alojamento}
                                status={status}
                                dataEntrada={dataEntrada}
                                dataSaida={dataSaida}
                            />
                        )
                    )}
                </Box>
            ) : (
                <>Loading...</>
            )}
        </Box>
    );
};

export default Quartos;