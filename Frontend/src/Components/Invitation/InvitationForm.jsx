import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InvitationModal from "../Invitation/InvitationModal";

export default function InvitationForm() {
  const [formData, setFormData] = useState({
    name: "",
    semester: "",
    classRoll: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    classRoll: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (name === "name") {
      const isValidName = /^[A-Za-z\s]*$/.test(value) && value.length <= 50;
      setErrors({
        ...errors,
        name: isValidName
          ? ""
          : "Name must contain only letters and whitespace, max 50 characters",
      });
    } else if (name === "classRoll") {
      const isValidClassRoll =
        /^[0-9]*$/.test(value) && value >= 1 && value <= 60;
      setErrors({
        ...errors,
        classRoll: isValidClassRoll
          ? ""
          : "Class Roll must be a number between 1 and 60",
      });
    }
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, semester: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    const isValidName =
      /^[A-Za-z\s]*$/.test(formData.name) && formData.name.length <= 50;
    const isValidClassRoll =
      /^[0-9]*$/.test(formData.classRoll) &&
      formData.classRoll >= 1 &&
      formData.classRoll <= 60;

    if (!isValidName || !isValidClassRoll) {
      setErrors({
        name: isValidName
          ? ""
          : "Name must contain only letters and whitespace, max 50 characters",
        classRoll: isValidClassRoll
          ? ""
          : "Class Roll must be a number between 1 and 60",
      });
      return;
    }

    if (formData.name && formData.semester && formData.classRoll) {
      setIsModalOpen(true);
    }
  };

  return (
    <Box
      className="form-container"
      sx={{
        p: 4,
        maxWidth: 500,
        mx: "auto",
        backgroundColor: "#2c2c38",
        borderRadius: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
          inputProps={{ maxLength: 50 }}
          sx={{
            input: { color: "white" },
            label: { color: "#fff" },
            fieldset: { borderColor: "#fff" },
          }}
        />

        {/* Material UI Select for Semester */}
        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ color: "#fff" }}>Semester</InputLabel>
          <Select
            label="Semester"
            value={formData.semester}
            onChange={handleSelectChange}
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              ".MuiSvgIcon-root": {
                color: "white",
              },
            }}
          >
            <MenuItem value="BCA 1st">1st Semester</MenuItem>
            <MenuItem value="BCA 2nd">2nd Semester</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Class Roll"
          name="classRoll"
          value={formData.classRoll}
          onChange={handleChange}
          required
          variant="outlined"
          margin="normal"
          error={!!errors.classRoll}
          helperText={errors.classRoll}
          sx={{
            input: { color: "white" },
            label: { color: "#fff" },
            fieldset: { borderColor: "#fff" },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#ff5e57",
            mt: 2,
            py: 1,
            textTransform: "uppercase",
          }}
        >
          Submit & Show Invitation
        </Button>
      </form>

      {/* Modal is triggered upon form submission */}
      {isModalOpen && (
        <InvitationModal
          name={formData.name}
          semester={formData.semester}
          classRoll={formData.classRoll}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Box>
  );
}
