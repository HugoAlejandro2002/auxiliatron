import { Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";


const LoginComponent = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión.
        // Por ejemplo, puedes hacer una solicitud a tu servidor.
        console.log('Datos de inicio de sesión:', formData);
    };
    return (
        <Paper >
            <Typography variant="h5">
                Iniciar Sesión
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Correo Electrónico"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                >
                    Iniciar Sesión
                </Button>
            </form>
        </Paper>
    )
}

export default LoginComponent