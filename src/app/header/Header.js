import React from 'react'
import Logo from '../common/asset/logo-grabfood2.svg';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import './header.css';

const top100Films = [
  { label: "Jl. Purwakarta No.140, Bandung, 40291" },
  { label: "Jl. Terusan Jakarta No.53, Cicaheum, Kiaracondong, Bandung, Bandung, 40291" },
  { label: "Jl. Purwakarta, Babakan Surabaya, Kiaracondong, Bandung, 40281" },
  { label: "Jl. Terusan Jakarta No. 225 & 227, Kel. Antapani, Kec. Cicadas, Bandung, Bandung, 40291" },
  { label: "Jl. Purwakarta, Antapani Kidul, Antapani, Bandung, 40291" },
  { label: "Jl. Terusan Jakarta, Antapani, #274, Bandung, 4029" },
  { label: "Jl. Cicalengka Raya, Antapani Kidul, Antapani, Bandung, 40291" },
  { label: "Jl. Antapani Lama, Antapani Kulon, Antapani, Bandung, Antapani, Antapani Kulon, Bandung, 40291"},
  { label: "Jl. Cibodas Baru, Antapani Tengah, Antapani, Bandung, 40291" },
  { label: "Jl. Yogyakarta No.1, Antapani Kidul, Antapani, Bandung, Bandung, 40291" }
]

export const Header = () => {

  const navigate = useNavigate();

  const ButtonMasuk = styled(Button)({  
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#aaa6a6',
    color: '#676767',
    height: '36px',
    fontWeight: 'bold',
  })

  const handeleLogin = () => {
    navigate('https://food.grab.com/auth/login');
  }

  return (
    <div className='section-content'>
        <img src={Logo} className='grab-logo-header' alt="GrabFood Pesan Makanan Online"/>
        <div className='select-location'>
        <Autocomplete
            size='small'
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Antar ke" />}
        />
        </div>
        <div className='foodCartIcon'></div>
        <div className='masuk-daftar'>
          <ButtonMasuk onClick={handeleLogin}>Masuk/Daftar</ButtonMasuk>
        </div>
    </div>
  );
}