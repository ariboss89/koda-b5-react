import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSurveys } from "../redux/slices/surveys.slice";

function AddSurvey() {
  const surveyState = useSelector((state) => state.surveys);

  const dispatch = useDispatch();
  const [brand, setBrand] = useState([]);
  const [form, setForm] = useState({
    id: 0,
    fullName: "",
    age: "",
    gender: "",
    isSmoker: false,
    brand: [],
  });

  const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const onCheckedHandler = (e) => {
    if (e.target.checked === true) {
      brand.push(e.target.value);
    } else {
      for (let a = 0; a < brand.length; a++) {
        if (brand[a] == e.target.value) {
          brand.splice(a);
        }
      }
    }

    setForm((form) => {
      return { ...form, brand };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newSurvey = {
      id: surveyState.nextId,
      isCompleted: false,
    };
    Object.assign(newSurvey, { fullName: form.fullName });
    Object.assign(newSurvey, { age: form.age });
    Object.assign(newSurvey, { gender: form.gender });
    Object.assign(newSurvey, {
      isSmoker: form.isSmoker == "0" ? "Tidak" : "Ya",
    });
    Object.assign(newSurvey, { brand: [form.brand] });

    dispatch(addSurveys(newSurvey));

    setForm({
      id: 0,
      fullName: "",
      age: "",
      gender: "",
      isSmoker: false,
      brand: [],
    });
    setBrand([]);
  };

  return (
    <>
      <form
        className="flex flex-col justify-start items-start w-1/3 border p-2"
        onSubmit={submitHandler}
      >
        <label htmlFor="fullName">Nama Lengkap</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="border text-black"
          value={setForm.fullName}
          onChange={onChangeHandler}
        />

        <label htmlFor="age">Umur </label>
        <input
          type="text"
          name="age"
          id="age"
          className="border"
          value={setForm.age}
          onChange={onChangeHandler}
        />

        <label htmlFor="gender">Jenis Kelamin</label>
        <div className="flex justify-center items-center">
          <p>Laki-Laki</p>
          <input
            type="radio"
            name="gender"
            id="laki-laki"
            value="Laki-Laki"
            checked={form.gender === "Laki-Laki"}
            onChange={onChangeHandler}
          />
          <p>L</p>
        </div>
        <div className="flex justify-center items-center mb-1">
          <label htmlFor="p">Perempuan</label>
          <input
            type="radio"
            name="gender"
            id="perempuan"
            value="Perempuan"
            checked={form.gender === "Perempuan"}
            onChange={onChangeHandler}
          />
          <label htmlFor="p">P</label>
        </div>

        <label htmlFor="isSmoker">Apakah anda seorang perokok ?</label>
        <select
          name="isSmoker"
          id="rokok"
          className="border mb-2"
          onChange={onChangeHandler}
        >
          <option value={form.isSmoker}>Pilih Jawaban</option>
          <option value={1}>Ya</option>
          <option value={0}>Tidak</option>
        </select>

        <label htmlFor="brand">Brand rokok yang digunakan ?</label>
        <div>
          <input
            type="checkbox"
            name="brand"
            value={"Dunhill "}
            onChange={onCheckedHandler}
          />
          <label htmlFor="dunhill"> Dunhill </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="brand"
            value={"Gudang Garam "}
            onChange={onCheckedHandler}
          />
          <label htmlFor="gudangGaram"> Gudang Garam</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="brand"
            value={"Marlboro "}
            onChange={onCheckedHandler}
          />
          <label htmlFor="reading"> Marlboro</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="brand"
            value={"Sampoerna "}
            onChange={onCheckedHandler}
          />
          <label> Sampoerna</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="brand"
            value={"Surya "}
            onChange={onCheckedHandler}
          />
          <label> Surya</label>
        </div>

        <br />
        <input className="border p-2" type="submit" value={"SUBMIT FORM"} />
      </form>
    </>
  );
}

export default AddSurvey;
