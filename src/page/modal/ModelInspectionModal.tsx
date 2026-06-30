import type { ReactNode } from "react";
import { Icon } from "../../components/Icon/Icon";
import { Label } from "../../components/Label";
import { TableHeadCell, TableDataCell } from "../../components/Table";

/**
 * 모델 검사 결과 — Large 모달 (Figma 40000001-41787).
 * 디자인 시스템 토큰 + 기존 컴포넌트(Label / Table 셀 / Icon)만으로 구성한다.
 */
export interface ModelInspectionModalProps {
  onClose?: () => void;
  className?: string;
}

const DIVIDER_STYLE = { backgroundColor: "var(--color-greyscale-500)" };

function Divider() {
  return <div style={DIVIDER_STYLE} className="h-px w-full shrink-0" />;
}

function Pair({ head, children }: { head: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 items-stretch">
      <TableHeadCell className="h-auto! w-38 shrink-0 self-stretch">
        {head}
      </TableHeadCell>
      <TableDataCell className="min-w-0 flex-1 self-stretch">
        {children}
      </TableDataCell>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex w-full flex-col gap-3">
      <h3 className="text-title4-semibold text-fg">{title}</h3>
      <div className="flex w-full flex-col">
        <Divider />
        {children}
      </div>
    </section>
  );
}

function Row({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-stretch">{children}</div>;
}

const DETAIL_VACCINE =
  "Model artifact download completed, Verification result: {'verifiers': {'sophos': {'success': True, 'infected_count': 0, 'scanned_at': '2025-12-11T07:07:14.811978+0000', 'scan_time': 0.126003, 'scanned_count': 25, 'metadata': {'scan_command': '/usr/local/bin/avscanner --scan-archives /home/lablup/temp-storage/google/gemma-3-27b-it/main'}, 'error': None}, 'v3': {'success': True, 'infected_count': 0, 'scanned_at': '2025-12-11T07:07:14.938581+0000', 'scan_time': 6.225144, 'scanned_count': 25, 'metadata': {'scan_command': 'action scan start directory /home/lablup/temp-storage/google/gemma-3-27b-it/main'}, 'error': None}, 'deepsecurity': {'success': True, 'infected_count': 0, 'scanned_at': '2025-12-11T07:07:14.811978+0000', 'scan_time': 0.126003, 'scanned_count': 25, 'metadata': {'scan_command': '/usr/local/bin/avscanner --scan-archives /home/lablup/temp-storage/google/gemma-3-27b-it/main'}, 'error': None}}}";

const DETAIL_VULN =
  'VULNERABILITY_CHECK { "total_vulnerabilities": 0, "vulnerabilities_by_severity": 0, "vulnerabilities": [] }';

export function ModelInspectionModal({ onClose, className }: ModelInspectionModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ width: "var(--layout-modal-lg-w)" }}
      className={["flex flex-col rounded-xl bg-bg", className].filter(Boolean).join(" ")}
    >
      <div className="flex items-center gap-4 rounded-t-xl bg-bg px-10 pb-6 pt-8">
        <h2 id="modal-title" className="min-w-0 flex-1 text-title1-bold text-fg">모델 검사 결과</h2>
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="flex shrink-0 cursor-pointer items-center justify-center text-fg"
        >
          <Icon name="close" size={24} title="닫기" />
        </button>
      </div>

      <div className="flex flex-col gap-8 overflow-y-auto px-10" tabIndex={0}>
        <Section title="외부망 백신점검 결과 요약">
          <Row>
            <Pair head="백신 검사 결과">
              <Label color="blue">적합</Label>
            </Pair>
          </Row>
          <Row>
            <Pair head="검사한 파일 수">25</Pair>
            <Pair head="감염 파일 수">0</Pair>
          </Row>
        </Section>

        <Section title="내부망 백신점검 결과 요약">
          <Row>
            <Pair head="백신 검사 결과">
              <Label color="blue">적합</Label>
            </Pair>
          </Row>
          <Row>
            <Pair head="백신 점검 내용">25</Pair>
          </Row>
        </Section>

        <Section title="취약점검 결과 요약">
          <Row>
            <Pair head="취약점검 결과">
              <Label color="blue">양호</Label>
            </Pair>
            <Pair head="발견된 취약점 수" />
          </Row>
          <Row>
            <Pair head="취약점 심각도 별 파일 수" />
            <Pair head="취약점 내용" />
          </Row>
        </Section>

        <Section title="모델 점검 결과 상세">
          <Row>
            <Pair head="백신 검사 결과">{DETAIL_VACCINE}</Pair>
          </Row>
          <Row>
            <Pair head="취약점검 결과">{DETAIL_VULN}</Pair>
          </Row>
        </Section>
      </div>

      <div className="h-30 shrink-0 rounded-b-xl bg-bg" />
    </div>
  );
}
