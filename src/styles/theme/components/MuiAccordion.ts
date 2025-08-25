import type {
	ComponentsOverrides,
	ComponentsProps,
	ComponentsVariants,
	Theme,
} from "@mui/material";

type MuiAccordion = {
	defaultProps?: ComponentsProps["MuiAccordion"];
	styleOverrides?: ComponentsOverrides<Theme>["MuiAccordion"];
	variants?: ComponentsVariants["MuiAccordion"];
};

const styles = ({ palette, spacing }: Theme): MuiAccordion => ({
	styleOverrides: {
		root: {
			backgroundColor: palette.background.paper,
			textAlign: "left",

			"&.MuiAccordion-root": {
				borderRadius: spacing(1),

				"&:before": {
					display: "none",
				},

				"& .MuiAccordionSummary-expandIconWrapper": {
					transition: "transform 0.3s ease",
					padding: spacing(2),
					fontSize: "1.25rem",
					color: palette.primary.main,
				},

				"&.Mui-expanded": {
					marginTop: 0,
					marginBottom: 0,

					"& .MuiAccordionSummary-expandIconWrapper": {
						transform: "rotate(135deg)",
					},
				},

				"& .MuiAccordionSummary-root": {
					margin: 0,
					padding: 0,

					"& .MuiAccordionSummary-content": {
						margin: 0,
						padding: spacing(3, 1, 3, 3),
					},
				},

				"& .MuiAccordionDetails-root": {
					padding: spacing(0, 3, 3),
				},
			},
		},
	},
});

export default styles;
