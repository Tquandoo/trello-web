import Box from "@mui/system/Box";
import Card from "./Card/Card";

const ListCards = ({ cards }) => {
  return (
    <Box
      sx={{
        p: "0 5px",
        m: "0 5px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        // maxHeight: (theme) =>
        //   `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
        //     5
        //   )} - ${COLUMN_HEADER_HEIGHT}- ${COLUMN_FOOTER_HEIGHT})`,
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.columnHeaderHeight
          } - ${theme.trello.columnFooterHeight})`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      {cards?.map((card) => {
        return <Card key={card._id} card={card} />;
      })}
    </Box>
  );
};
export default ListCards;
