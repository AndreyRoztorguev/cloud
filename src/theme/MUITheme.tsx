import { createTheme, darken } from "@mui/material";

const muiTheme = createTheme({
  palette: {
    primary: { main: "hsl(235, 78%, 25%)" },
    text: { primary: "hsl(235, 14%, 53%)", secondary: "hsl(221, 43%, 11%)" },
    brand: { main: "hsl(217, 100%, 50%)", light: "hsl(219, 100%, 96%)" },
    background: {
      default: "hsl(0, 0%, 99%)",
      paper: "hsl(0, 0%, 100%)",
      primary: { main: "lightgreen" },
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained" },
              style({ theme }) {
                return {
                  ...theme.palette.Button,
                  boxShadow: theme.shadows[4],
                  textTransform: "capitalize",
                  borderRadius: theme.shape.borderRadius * 2,
                  color: theme.palette.brand.main,
                  backgroundColor: theme.palette.brand.light,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: darken(theme.palette.brand.light, 0.1),
                  },
                };
              },
            },
            {
              props: { variant: "primary" },
              style({ theme }) {
                return {
                  backgroundColor: theme.palette.brand.main,
                  color: "#fff",
                  borderRadius: theme.shape.borderRadius * 2,
                  "&:hover": {
                    backgroundColor: darken(theme.palette.brand.main, 0.3),
                  },
                };
              },
            },
          ],
        },
      },
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { name: "logo" },
          style: ({ theme }) => ({
            color: theme.palette.common.black,
          }),
        },
        {
          props: { name: "nav-item" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      ],
    },
    MuiPaper: {
      //   variants: [
      //     {
      //       props: { variant: "outlined" },
      //       style: ({ theme }) => ({ color: theme.palette.primary.main }),
      //     },
      //   ],
      defaultProps: {
        // variant: "outlined",
      },
      styleOverrides: {
        // root: ({ theme }) => ({
        //   boxShadow: theme.shadows[1],
        // }),
      },
    },
    MuiAutocomplete: {
      variants: [
        {
          props: { freeSolo: true },
          style: ({ theme }) => ({
            color: "red",
            backgroundColor: theme.palette.background.paper,
          }),
        },
      ],
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(4),
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
        }),
      },
    },
    MuiTableCell: {
      variants: [
        {
          props: { padding: "normal" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
            border: "none",
          }),
        },
      ],
      defaultProps: { padding: "normal" },
    },
    MuiTablePagination: {
      variants: [
        {
          props: { padding: "normal" },
          style: ({ theme }) => ({
            "& >:last-child": {
              paddingRight: theme.spacing(4),
            },
          }),
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: {
            type: "search",
          },
          style: ({ theme }) => ({
            // ".MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
            //   borderBottom: "none",
            // },
            ".MuiAutocomplete-inputRoot": {
              padding: `0 ${theme.spacing(2)}`,
              fontSize: theme.typography.body2.fontSize,
              color: theme.palette.text.secondary,
              boxShadow: theme.shadows[3],
              borderRadius: theme.shape.borderRadius * 3,
              // "&:before": {
              //   borderBottom: "none",
              // },
            },
          }),
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        },
      },
    },
  },
});

muiTheme.shadows[1] = "0px 2px 30px 0px hsl(0 0% 0% / 60%)";
muiTheme.shadows[2] = "0px 4px 4px 0px hsl(0 0% 0% / 25%)";
muiTheme.shadows[3] = "0px 2px 100px 0px hsl(0 0% 0% / 10%)";
muiTheme.shadows[4] = "0px 1px 2px 0px hsl(220 43% 11% / 10%)";

export default muiTheme;
