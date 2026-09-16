import os
import shutil
from PIL import Image
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors

def generate_combined_pdf():
    images_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images")
    files_dir = os.path.join(os.path.dirname(__file__), "..", "public", "files")
    os.makedirs(files_dir, exist_ok=True)

    genogram_img_path = os.path.join(images_dir, "genogram-aisyah-family.png")
    ecomap_img_path = os.path.join(images_dir, "eco-map.png")
    output_pdf_path = os.path.join(files_dir, "genogram-aisyah-family.pdf")

    if not os.path.exists(genogram_img_path) or not os.path.exists(ecomap_img_path):
        print(f"Error: Missing image files in {images_dir}")
        return

    page_width, page_height = A4
    margin_x = 24
    margin_top = 24
    margin_bottom = 20

    c = canvas.Canvas(output_pdf_path, pagesize=A4)
    c.setTitle("Aisyah Family Case Formulation - Genogram & Eco-Map")
    c.setAuthor("SUSS SWK502 Casework & Family Intervention")
    c.setSubject("Genogram and Eco-map Visual Formulations")

    # Header Background Banner
    banner_height = 40
    banner_y = page_height - margin_top - banner_height
    c.setFillColor(colors.HexColor("#0f172a")) # Slate 900
    c.roundRect(margin_x, banner_y, page_width - (2 * margin_x), banner_height, 6, stroke=0, fill=1)

    # Header Text
    c.setFillColor(colors.white)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(margin_x + 14, banner_y + 23, "SUSS SWK502: Aisyah Family Case Formulation")

    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#94a3b8")) # Slate 400
    c.drawString(margin_x + 14, banner_y + 9, "Figure 1: Genogram of Aisyah Family  |  Figure 2: Eco-map System Connections")

    # Available vertical space
    available_height = banner_y - margin_bottom - 16
    slot_height = (available_height - 14) / 2

    # Target box
    box_w = page_width - (2 * margin_x)
    box_h = slot_height

    # Image 1: Genogram
    g_img = Image.open(genogram_img_path)
    g_w, g_h = g_img.size
    g_aspect = g_w / g_h

    if box_w / box_h > g_aspect:
        draw_g_h = box_h
        draw_g_w = box_h * g_aspect
    else:
        draw_g_w = box_w
        draw_g_h = box_w / g_aspect

    g_x = margin_x + (box_w - draw_g_w) / 2
    g_y = banner_y - 8 - draw_g_h

    c.drawImage(genogram_img_path, g_x, g_y, width=draw_g_w, height=draw_g_h, mask='auto')

    # Divider line
    divider_y = g_y - 7
    c.setStrokeColor(colors.HexColor("#cbd5e1"))
    c.setLineWidth(0.75)
    c.line(margin_x + 20, divider_y, page_width - margin_x - 20, divider_y)

    # Image 2: Eco-map
    e_img = Image.open(ecomap_img_path)
    e_w, e_h = e_img.size
    e_aspect = e_w / e_h

    if box_w / box_h > e_aspect:
        draw_e_h = box_h
        draw_e_w = box_h * e_aspect
    else:
        draw_e_w = box_w
        draw_e_h = box_w / e_aspect

    e_x = margin_x + (box_w - draw_e_w) / 2
    e_y = divider_y - 7 - draw_e_h

    c.drawImage(ecomap_img_path, e_x, e_y, width=draw_e_w, height=draw_e_h, mask='auto')

    # Footer note
    c.setFont("Helvetica-Oblique", 7)
    c.setFillColor(colors.HexColor("#64748b"))
    c.drawCentredString(page_width / 2, 8, "SWK502 Casework & Family Intervention - Single-Page Integrated Case Formulation Reference")

    c.showPage()
    c.save()
    print(f"Successfully generated single-page PDF at: {output_pdf_path}")

    # Also make sure SWK502_Aisyah_Case_Study.pdf exists
    presentation_pdf = os.path.join(files_dir, "Aisyah Case Study - SUSS Presentation.pdf")
    target_study_pdf = os.path.join(files_dir, "SWK502_Aisyah_Case_Study.pdf")
    if os.path.exists(presentation_pdf):
        shutil.copy2(presentation_pdf, target_study_pdf)
        print(f"Copied presentation PDF to: {target_study_pdf}")

if __name__ == '__main__':
    generate_combined_pdf()
